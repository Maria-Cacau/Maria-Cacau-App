from concurrent.futures import ThreadPoolExecutor

from maria_cacau.core.error import unexpected_error

from ..domain.models import SheetModel
from ..domain.signals import signals
from ..domain.use_case import SheetsUseCase


class SheetsViewModel:
    def __init__(self) -> None:
        self.use_case = SheetsUseCase()
        self.executor = ThreadPoolExecutor(max_workers=1)

    # --- sync: leitura de cache local, sem necessidade de thread ---

    def load_all(self) -> list[SheetModel]:
        return self.use_case.load_all()

    def find_by_link(self, link: str) -> SheetModel | None:
        return self.use_case.find_by_link(link)

    # --- async: cache local ---

    def update_name(self, sheet_id: str, new_name: str) -> None:
        self.executor.submit(lambda: self._update_name(sheet_id, new_name))

    def _update_name(self, sheet_id: str, new_name: str) -> None:
        try:
            sheet = self.use_case.update_name(sheet_id, new_name)
            signals.sheet_renamed.emit(sheet)
        except Exception as e:
            signals.error.emit(unexpected_error(e))

    # --- async: operações com I/O (backend) ---

    def connect(self, link: str, name: str) -> None:
        self.executor.submit(lambda: self._connect(link, name))

    def _connect(self, link: str, name: str) -> None:
        try:
            sheet = self.use_case.connect(link, name)
            signals.sheet_connected.emit(sheet)
        except Exception as e:
            signals.error.emit(unexpected_error(e))


    def select(self, sheet_id: str) -> None:
        self.executor.submit(lambda: self._select(sheet_id))

    def _select(self, sheet_id: str) -> None:
        try:
            sheet = self.use_case.select(sheet_id)
            signals.sheet_selected.emit(sheet)
        except Exception as e:
            signals.error.emit(unexpected_error(e))


    def auto_connect(self) -> None:
        self.executor.submit(self._auto_connect)

    def _auto_connect(self) -> None:
        try:
            sheet = self.use_case.auto_select_last()
            if sheet:
                signals.sheet_selected.emit(sheet)
        except Exception as e:
            signals.error.emit(unexpected_error(e))
