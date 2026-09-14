import gspread
from gspread.utils import rowcol_to_a1

from . import _utils as utils
from .errors._errors import (OrderNotFoundError, SheetColumnNotFoundError,
                             SheetWriteError, UnexpectedSheetStructureError)
from .errors._handler import handle_api
from .sheet_mapper import SheetCols, SheetTabs


class _SheetsViewModel:
    """Encapsula o acesso à planilha: schema cacheado, prewarm, fetch e escrita."""

    def __init__(self, client: gspread.Client, sheet_id: str) -> None:
        self._client   = client
        self._sheet_id = sheet_id
        self._header: list[str] | None = None
        # Válidos apenas quando _header não é None; None quando a coluna não existe no header.
        self._data_col:  int | None = None
        self._order_col: int | None = None

    @property
    def database(self) -> gspread.Worksheet:
        return self._client.open_by_key(self._sheet_id).worksheet(SheetTabs.DATABASE)

    def prewarm(self) -> None:
        try:
            self._load_schema(self.database)
        except Exception:
            pass

    def _load_schema(self, worksheet: gspread.Worksheet) -> None:
        """Carrega cabeçalho e índices das colunas conhecidas na primeira chamada; no-op nas
        seguintes."""
        if self._header is not None:
            return

        header = worksheet.row_values(1)
        self._header = header

        self._data_col  = self._find_col(header, SheetCols.DELIVERY_DATE)
        self._order_col = self._find_col(header, SheetCols.ORDER)

    @staticmethod
    def _find_col(header: list[str], name: str) -> int | None:
        return next((i + 1 for i, h in enumerate(header) if h.strip().lower() == name), None)

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

        rows = self._batch_get_rows(worksheet, target_rows, len(header))
        return utils.to_dicts(header, rows)

    @handle_api
    def fetch_by_order_number(self, number: str) -> dict | None:
        """Busca exata pelo número do pedido, com o mesmo padrão de dois passes do `fetch` por
        data: lê só a coluna PEDIDO para achar a linha, depois busca apenas essa linha."""
        worksheet = self.database
        self._load_schema(worksheet)

        target_row = self._find_row(worksheet, number)
        if target_row is None:
            return None

        rows = self._batch_get_rows(worksheet, [target_row], len(self._header))
        return utils.to_dicts(self._header, rows)[0]

    @handle_api
    def update_order(self, number: str, fields: dict[str, str]) -> None:
        """Atualiza os campos informados, num único `batch_update`.

        Resolve a linha pela chave (número do pedido) na hora de escrever, não por um índice
        guardado de uma busca anterior — protege contra a linha ter mudado de posição entre a
        busca e a escrita (reordenação, inserção de linha).
        """
        worksheet = self.database
        self._load_schema(worksheet)

        target_row = self._find_row(worksheet, number)
        if target_row is None:
            raise OrderNotFoundError(number=number)

        updates = []
        for field, value in fields.items():
            col = self._find_col(self._header, field)
            if col is None:
                raise SheetColumnNotFoundError(column=field)
            updates.append({"range": rowcol_to_a1(target_row, col), "values": [[value]]})

        try:
            worksheet.batch_update(updates)
        except Exception as exc:
            raise SheetWriteError(cause=exc)

    def _find_row(self, worksheet: gspread.Worksheet, number: str) -> int | None:
        """Localiza a linha do pedido pela chave, lendo só a coluna PEDIDO."""
        if self._order_col is None:
            raise SheetColumnNotFoundError(column=SheetCols.ORDER)

        normalized = utils.normalize_order_number(number)
        col_values = worksheet.col_values(self._order_col)

        return next(
            (idx for idx, val in enumerate(col_values[1:], start=2)
             if utils.normalize_order_number(val) == normalized),
            None,
        )

    @staticmethod
    def _batch_get_rows(worksheet: gspread.Worksheet, target_rows: list[int], header_len: int) -> list[list]:
        """Busca as linhas informadas, em batches de até 100 ranges, e normaliza o comprimento
        de cada uma para o do cabeçalho."""
        rows: list[list] = []
        for batch in utils.to_ranges(target_rows):
            for value_range in worksheet.batch_get(batch):
                for row in value_range:
                    if len(row) > header_len:
                        raise UnexpectedSheetStructureError(expected=header_len, got=len(row))
                    rows.append((row + [""] * max(0, header_len - len(row)))[:header_len])
        return rows
