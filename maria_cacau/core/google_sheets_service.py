import json
from typing import Final

import gspread
import keyring
from google.oauth2.service_account import Credentials
from pandas import DataFrame

_KEYRING_SERVICE = "maria-cacau"
_KEYRING_KEY     = "google-credentials"
_SCOPES          = ["https://www.googleapis.com/auth/spreadsheets.readonly"]


class GoogleSheetsService:
    """Responsável pela autenticação e leitura da planilha do Google Sheets."""

    def __init__(self) -> None:
        self._client: gspread.Client = None
        self._sheet_id: str = None

    # ── Credenciais ───────────────────────────────────────────────────────────

    def load_credentials_from_file(self, path: str) -> None:
        """Lê o .json da Service Account, autentica e salva no keychain."""
        with open(path) as f:
            raw = f.read()
        keyring.set_password(_KEYRING_SERVICE, _KEYRING_KEY, raw)
        self._authenticate(raw)

    def load_credentials_from_keychain(self) -> bool:
        """Tenta autenticar usando credenciais salvas no keychain. Retorna False se não houver."""
        raw = keyring.get_password(_KEYRING_SERVICE, _KEYRING_KEY)
        if not raw:
            return False
        self._authenticate(raw)
        return True

    def _authenticate(self, raw_json: str) -> None:
        creds = Credentials.from_service_account_info(
            json.loads(raw_json), scopes=_SCOPES
        )
        self._client = gspread.authorize(creds)

    def is_authenticated(self) -> bool:
        return self._client is not None

    # ── Planilha ──────────────────────────────────────────────────────────────

    def set_sheet(self, sheet_id: str) -> None:
        """Define qual planilha vai ser lida pelo ID ou URL do Google Sheets."""
        self._sheet_id = sheet_id

    def get_data(self, worksheet_name: str = None) -> DataFrame:
        """Retorna os dados da planilha como DataFrame."""
        spreadsheet = self._client.open_by_key(self._sheet_id)
        worksheet = (
            spreadsheet.worksheet(worksheet_name)
            if worksheet_name
            else spreadsheet.sheet1
        )
        records = worksheet.get_all_records()
        return DataFrame(records)


service: Final = GoogleSheetsService()
