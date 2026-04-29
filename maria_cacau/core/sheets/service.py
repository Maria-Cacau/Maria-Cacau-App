"""Autenticação e acesso ao Google Sheets."""

import json
from datetime import datetime
from pathlib import Path
from typing import Final

import gspread
from google.oauth2.service_account import Credentials

from maria_cacau.core.storage.security import SecurityStorage
from maria_cacau.core.storage.cache import CacheStorage

def _parse_date(s: str) -> datetime:
    for fmt in ('%d/%m/%y', '%d/%m/%Y'):
        try:
            return datetime.strptime(s, fmt)
        except ValueError:
            continue
    return datetime.min


_KEYRING_SERVICE  = "maria-cacau"
_KEYRING_KEY      = "google-credentials-pk"   # armazena só a private_key
_CREDS_META_KEY   = "google-credentials-meta" # armazena o JSON sem a private_key
_SCOPES           = ["https://www.googleapis.com/auth/spreadsheets.readonly"]

_security     = SecurityStorage(_KEYRING_SERVICE)
_creds_cache  = CacheStorage(Path.home() / '.mariacacau')


class GoogleSheetsService:
    def __init__(self) -> None:
        self._client: gspread.Client = None
        self._sheet_id: str = None

    # ── Credenciais ───────────────────────────────────────────────────────────

    def load_credentials_from_file(self, path: str) -> None:
        """Lê o .json da Service Account, autentica e salva:
        - private_key  → keyring
        - restante     → cache JSON em ~/.mariacacau/
        """
        with open(path) as f:
            data = json.load(f)

        private_key = data.pop('private_key')
        _security.save(private_key, _KEYRING_KEY)
        _creds_cache.save(data, _CREDS_META_KEY)

        data['private_key'] = private_key
        self._authenticate(json.dumps(data))

    def load_credentials_from_keychain(self) -> bool:
        """Reconstrói as credenciais a partir do keyring + cache. Retorna False se não houver."""
        private_key = _security.retrieve(_KEYRING_KEY)
        meta = _creds_cache.retrieve(_CREDS_META_KEY)
        if not private_key or not meta:
            return False
        meta['private_key'] = private_key
        self._authenticate(json.dumps(meta))
        return True

    def _authenticate(self, raw_json: str) -> None:
        creds = Credentials.from_service_account_info(
            json.loads(raw_json), scopes=_SCOPES
        )
        self._client = gspread.authorize(creds)

    def is_authenticated(self) -> bool:
        return self._client is not None

    def clear_credentials(self) -> bool:
        """Remove private_key do keyring e metadados do cache. Retorna False se não havia nada salvo."""
        result = _security.delete(_KEYRING_KEY)
        _creds_cache.delete(_CREDS_META_KEY)
        if result:
            self._client = None
        return result

    # ── Planilha ──────────────────────────────────────────────────────────────

    def is_connected(self) -> bool:
        """Retorna True se uma planilha foi vinculada."""
        return self._sheet_id is not None

    def set_sheet(self, sheet_id: str) -> None:
        """Define qual planilha vai ser lida pelo ID ou URL do Google Sheets."""
        self._sheet_id = sheet_id

    def get_raw_data(self, worksheet_name: str = None) -> list:
        """Retorna as linhas brutas da planilha (lista de listas de strings)."""
        spreadsheet = self._client.open_by_key(self._sheet_id)
        worksheet = (
            spreadsheet.worksheet(worksheet_name)
            if worksheet_name
            else spreadsheet.sheet1
        )
        return worksheet.get_all_values()

    def get_cadastro_filtered(self) -> list:
        """Lê todas as linhas da aba Cadastro usando dois passes para economizar API.

        Faz dois passes: lê a coluna DATA para descobrir as datas,
        depois busca as linhas via batch_get.
        Fallback para get_all_values se a coluna DATA não for encontrada.
        """
        spreadsheet = self._client.open_by_key(self._sheet_id)
        ws = spreadsheet.worksheet('Cadastro')

        # Pass 1: descobre índice da coluna DATA
        header = ws.row_values(1)
        data_col_1based = next(
            (i + 1 for i, h in enumerate(header) if h.strip().upper() == 'DATA'),
            None,
        )
        if data_col_1based is None:
            return ws.get_all_values()

        # Pass 2: lê só a coluna de data (muito mais leve que ler tudo)
        date_col = ws.col_values(data_col_1based)  # índice 0 = célula do header

        # Identifica todas as datas com dados
        unique_dates = list({v[:10] for v in date_col[1:] if v and v.strip()})
        unique_dates.sort(key=_parse_date)
        recent = set(unique_dates)

        # Acha os números de linha (1-based) que correspondem a essas datas
        target_rows = [1]  # sempre inclui o header
        for idx, val in enumerate(date_col[1:], start=2):
            if val and val[:10] in recent:
                target_rows.append(idx)

        if len(target_rows) <= 1:
            return [header]

        # Agrupa em ranges contíguos para minimizar chamadas de API
        # ex: [1,2,3,10,11] → ['1:3', '10:11']
        ranges: list[str] = []
        start = end = target_rows[0]
        for r in target_rows[1:]:
            if r == end + 1:
                end = r
            else:
                ranges.append(f'{start}:{end}')
                start = end = r
        ranges.append(f'{start}:{end}')

        # Batch read (limite de 100 ranges por chamada da API)
        header_len = len(header)
        rows: list[list] = []
        for i in range(0, len(ranges), 100):
            for value_range in ws.batch_get(ranges[i:i + 100]):
                for row in value_range:
                    rows.append((row + [''] * max(0, header_len - len(row)))[:header_len])

        return rows

    def get_cadastro_for_dates(self, dates: set) -> list:
        """Lê linhas da aba Cadastro para um conjunto específico de datas.

        Mesmo mecanismo de dois passes de get_cadastro_filtered, mas filtra
        por datas exatas em vez das N mais recentes.
        """
        spreadsheet = self._client.open_by_key(self._sheet_id)
        ws = spreadsheet.worksheet('Cadastro')

        header = ws.row_values(1)
        data_col_1based = next(
            (i + 1 for i, h in enumerate(header) if h.strip().upper() == 'DATA'),
            None,
        )
        if data_col_1based is None:
            return ws.get_all_values()

        date_col = ws.col_values(data_col_1based)

        target_rows = [1]
        for idx, val in enumerate(date_col[1:], start=2):
            if val:
                v = val.strip()
                if v in dates or v[:10] in dates:
                    target_rows.append(idx)

        if len(target_rows) <= 1:
            return [header]

        ranges: list[str] = []
        start = end = target_rows[0]
        for r in target_rows[1:]:
            if r == end + 1:
                end = r
            else:
                ranges.append(f'{start}:{end}')
                start = end = r
        ranges.append(f'{start}:{end}')

        header_len = len(header)
        rows: list[list] = []
        for i in range(0, len(ranges), 100):
            for value_range in ws.batch_get(ranges[i:i + 100]):
                for row in value_range:
                    rows.append((row + [''] * max(0, header_len - len(row)))[:header_len])

        return rows


service: Final = GoogleSheetsService()
