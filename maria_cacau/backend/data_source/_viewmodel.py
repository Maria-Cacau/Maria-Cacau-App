import gspread

from . import _utils as utils
from .sheet_mapper import SheetCols, SheetTabs
from .errors._handler import handle_api
from .errors._errors import UnexpectedSheetStructureError


class _SheetsViewModel:
    """Encapsula o acesso à planilha: schema cacheado, prewarm e fetch."""

    def __init__(self, client: gspread.Client, sheet_id: str) -> None:
        self._client   = client
        self._sheet_id = sheet_id
        self._header: list[str] | None = None
        self._data_col: int | None     = None  # válido apenas quando _header não é None

    @property
    def database(self) -> gspread.Worksheet:
        return self._client.open_by_key(self._sheet_id).worksheet(SheetTabs.DATABASE)

    def prewarm(self) -> None:
        try:
            self._load_schema(self.database)
        except Exception:
            pass

    def _load_schema(self, worksheet: gspread.Worksheet) -> None:
        """Carrega cabeçalho e índice da coluna DATA na primeira chamada; no-op nas seguintes."""
        if self._header is not None:
            return
        
        header = worksheet.row_values(1)
        self._header   = header

        self._data_col = next(
            (i + 1 for i, h in enumerate(header) if h.strip().lower() == SheetCols.DELIVERY_DATE),
            None,
        )

    @handle_api
    def fetch(self, dates: set[str]) -> list[dict]:
        """Busca pedidos por datas usando dois passes para minimizar chamadas à API.

        Passo 1 — leve: usa o schema cacheado (cabeçalho + índice da coluna DATA)
        e lê só essa coluna para identificar as linhas das datas pedidas.

        Passo 2 — cirúrgico: faz batch_get apenas nas linhas identificadas,
        em lotes de até 100 ranges para respeitar o limite da API.

        Fallback: se a coluna DATA não for encontrada, traz tudo (get_all_values).
        """
        worksheet = self.database
        self._load_schema(worksheet)
        header   = self._header
        date_col = self._data_col

        # Passo 1a: sem coluna DATA — fallback para leitura completa
        if date_col is None:
            return utils.to_dicts(header, worksheet.get_all_values()[1:])

        # Passo 1b: lê só a coluna DATA e filtra os números das linhas alvo
        normalized  = {utils.normalize_date(d) for d in dates}
        col_values  = worksheet.col_values(date_col)

        target_rows = [
            idx for idx, val in enumerate(col_values[1:], start=2)
            if utils.normalize_date(val) in normalized
        ]
        if not target_rows:
            return []

        # Passo 2: busca apenas as linhas alvo, em batches de até 100 ranges
        header_len = len(header)
        rows: list[list] = []
        for batch in utils.to_ranges(target_rows):
            for value_range in worksheet.batch_get(batch):
                for row in value_range:
                    if len(row) > header_len:
                        raise UnexpectedSheetStructureError(expected=header_len, got=len(row))
                    # Garante que todas as linhas têm o mesmo comprimento do cabeçalho
                    rows.append((row + [""] * max(0, header_len - len(row)))[:header_len])

        return utils.to_dicts(header, rows)
