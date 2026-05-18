import json
import threading
from typing import Final

import gspread
from google.oauth2.service_account import Credentials

from . import _utils as utils
from ._normalizer import SheetNormalizer
from ._viewmodel import _SheetsViewModel
from .errors._handler import _guard

_SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"]


class GoogleSheetsDataSource:
    """Implementação de DataSourceProtocol para Google Sheets via gspread."""

    def __init__(self) -> None:
        self._client: gspread.Client | None = None
        self._sheet_id: str | None          = None
        self._vm: _SheetsViewModel | None   = None
        self._lock                          = threading.Lock()

    ### Protocol

    def is_ready(self) -> bool:
        return self._vm is not None

    def set_credentials(self, raw_json: str) -> None:
        with _guard.authentication():
            info         = json.loads(raw_json)
            creds        = Credentials.from_service_account_info(info, scopes=_SCOPES)
            self._client = gspread.authorize(creds)
        if self._sheet_id is not None:
            self._setup_vm()

    def set_sheet(self, sheet_id: str) -> None:
        _guard.validate_sheet_id(sheet_id)
        self._sheet_id = sheet_id
        if self._client is not None:
            self._setup_vm()

    def fetch_orders_by_date(self, date: str) -> list[dict]:
        _guard.validate_date(date)
        with self._lock:
            result = self._vm.fetch({date})
            return SheetNormalizer.normalize(result)

    def fetch_orders_by_period(self, start: str, end: str) -> list[dict]:
        _guard.validate_date(start)
        _guard.validate_date(end)
        _guard.validate_date_range(start, end)
        with self._lock:
            result = self._vm.fetch(utils.date_range(start, end))
            return SheetNormalizer.normalize(result)

    ### Interno

    def _setup_vm(self) -> None:
        self._vm = _SheetsViewModel(self._client, self._sheet_id)
        threading.Thread(target=self._vm.prewarm, daemon=True).start()


data_source: Final = GoogleSheetsDataSource()
