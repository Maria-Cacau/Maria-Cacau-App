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
        self._worksheet: gspread.Worksheet | None = None
        # Linha de cada pedido já localizado (número normalizado → linha): evita reler a coluna
        # PEDIDO inteira. Toda linha tirada daqui é conferida antes de ser usada.
        self._rows: dict[str, int] = {}

    @property
    def database(self) -> gspread.Worksheet:
        # Abrir custa duas leituras de metadado (planilha e aba). O objeto não mantém conexão, só
        # o endereço da aba, então é reaproveitado — e descartado em erro da API (ex.: aba renomeada).
        if self._worksheet is None:
            self._worksheet = self._client.open_by_key(self._sheet_id).worksheet(SheetTabs.DATABASE)
        return self._worksheet

    def prewarm(self) -> None:
        try:
            self._load_schema(self.database)
        except Exception:
            pass

    def on_api_error(self) -> None:
        self._worksheet = None
        self._rows.clear()

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
        """Busca exata pelo número do pedido.

        Com a linha já conhecida, lê só ela e confere a coluna PEDIDO — o dado vem sempre atual, e a
        conferência pega a planilha reordenada. Sem linha conhecida (ou se ela mudou), lê a coluna
        PEDIDO para achá-la e depois busca a linha.
        """
        worksheet = self.database
        self._load_schema(worksheet)
        normalized = utils.normalize_order_number(number)

        known = self._rows.get(normalized)
        if known is not None:
            row = self._read_row(worksheet, known)
            if row is not None and self._row_is_order(row, normalized):
                return utils.to_dicts(self._header, [row])[0]
            self._rows.pop(normalized, None)

        target_row = self._find_row(worksheet, number)
        if target_row is None:
            return None
        return utils.to_dicts(self._header, [self._read_row(worksheet, target_row)])[0]

    @handle_api
    def update_order(self, number: str, fields: dict[str, str]) -> None:
        """Atualiza os campos informados, num único `batch_update`.

        A linha conhecida de uma busca anterior só é usada depois de conferir a célula PEDIDO dela:
        entre a busca e a escrita a planilha pode ter sido reordenada, e gravar na linha errada
        marcaria outro pedido. Se não bate, localiza de novo pela coluna PEDIDO.
        """
        worksheet = self.database
        self._load_schema(worksheet)
        target_row = self._row_for_write(worksheet, number)

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

    def _row_for_write(self, worksheet: gspread.Worksheet, number: str) -> int:
        normalized = utils.normalize_order_number(number)
        known = self._rows.get(normalized)
        if known is not None and self._order_col is not None:
            value = worksheet.cell(known, self._order_col).value or ""
            if utils.normalize_order_number(value) == normalized:
                return known
            self._rows.pop(normalized, None)

        target_row = self._find_row(worksheet, number)
        if target_row is None:
            raise OrderNotFoundError(number=number)
        return target_row

    def _find_row(self, worksheet: gspread.Worksheet, number: str) -> int | None:
        """Localiza a linha do pedido pela chave, lendo só a coluna PEDIDO."""
        if self._order_col is None:
            raise SheetColumnNotFoundError(column=SheetCols.ORDER)

        normalized = utils.normalize_order_number(number)
        col_values = worksheet.col_values(self._order_col)

        target_row = next(
            (idx for idx, val in enumerate(col_values[1:], start=2)
             if utils.normalize_order_number(val) == normalized),
            None,
        )
        if target_row is not None:
            self._rows[normalized] = target_row
        return target_row

    def _read_row(self, worksheet: gspread.Worksheet, row: int) -> list | None:
        rows = self._batch_get_rows(worksheet, [row], len(self._header))
        return rows[0] if rows else None

    def _row_is_order(self, row: list, normalized: str) -> bool:
        return self._order_col is not None and utils.normalize_order_number(row[self._order_col - 1]) == normalized

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
