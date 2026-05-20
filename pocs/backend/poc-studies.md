# POC Studies — Classes do Backend

> Rascunho das classes desenhadas para o módulo `backend/`.
> Serve como referência antes da implementação — não é código final.

---

## Protocolo — DataSource

Interface agnóstica à fonte de dados. Garante que trocar `GoogleSheetsDataSource` por `SQLDataSource` no futuro não mude nada nas camadas acima.

```python
# backend/data_source/_protocol.py

from typing import Protocol, runtime_checkable


@runtime_checkable
class DataSourceProtocol(Protocol):

    def is_ready(self) -> bool: ...

    def wait_ready(self, timeout: float = 15.0) -> None: ...

    def connect(self) -> None: ...

    def set_credentials(self, path: str) -> None: ...

    def set_sheet(self, sheet_id: str) -> None: ...

    def fetch_orders_by_date(self, date: str) -> list[dict]: ...

    def fetch_orders_by_period(self, start: str, end: str) -> list[dict]: ...
```

---

## Helper — Ponte com core/storage

Única dependência externa do backend. Abstrai leitura e escrita das credenciais e do sheet_id salvos localmente.

```python
# backend/data_source/_helper.py

from maria_cacau.core.storage.security import SecurityStorage

_CREDS_KEY = "google-credentials"
_SHEET_KEY = "sheet-id"

_storage = SecurityStorage()


def read_credentials() -> str | None:
    return _storage.retrieve(_CREDS_KEY)


def write_credentials(raw: str) -> None:
    _storage.save(raw, _CREDS_KEY)


def read_sheet_id() -> str | None:
    return _storage.retrieve(_SHEET_KEY)


def write_sheet_id(sheet_id: str) -> None:
    _storage.save(sheet_id, _SHEET_KEY)
```

---

## Error Handlers — Decorators e Context Managers

Tratamento de erros centralizado em `_error_handlers.py`. O `GoogleSheetsDataSource` fica só com lógica; todos os `try/except` ficam aqui.

Abordagem híbrida:
- **Decorators** (`handle_api`, `handle_sheet_setup`) — para métodos onde o tipo de erro dominante é único
- **Context managers** (`_guard.credentials_file`, `_guard.local_storage`, `_guard.authentication`) — para `set_credentials`, onde três operações distintas dentro do mesmo método levantam erros diferentes
- **Validações diretas** (`_guard.validate_*`) — chamadas síncronas sem `with`

```python
# backend/data_source/_error_handlers.py

import json
from contextlib import contextmanager

import gspread
import google.auth.exceptions
import requests


class _SheetsGuard:

    # ── Context managers ──────────────────────────────────────────────────

    @contextmanager
    def credentials_file(self, path: str):
        try:
            yield
        except FileNotFoundError:
            raise CredentialsFileNotFoundError(path=path)

    @contextmanager
    def local_storage(self):
        try:
            yield
        except OSError:
            raise CredentialsSaveError()

    @contextmanager
    def authentication(self):
        try:
            yield
        except json.JSONDecodeError:
            raise CredentialsFileCorruptedError()
        except KeyError:
            raise CredentialsFormatError(...)
        except google.auth.exceptions.TransportError:
            raise NetworkUnavailableError()
        except Exception:
            raise InvalidCredentialsError()

    # ── Validações ────────────────────────────────────────────────────────

    def validate_sheet_id(self, sheet_id: str) -> None:
        if not sheet_id or not sheet_id.strip():
            raise SheetIdInvalidError(sheet_id=sheet_id)

    def validate_date(self, value: str) -> None:
        if not _is_valid_date(value):
            raise InvalidDateFormatError(value=value)

    def validate_date_range(self, start: str, end: str) -> None:
        if _parse_date(end) < _parse_date(start):
            raise InvalidDateRangeError(start=start, end=end)


_guard = _SheetsGuard()


# ── Decorators ────────────────────────────────────────────────────────────

def handle_api(fn):
    def wrapper(*args, **kwargs):
        try:
            return fn(*args, **kwargs)
        except gspread.exceptions.APIError as e:
            if e.response.status_code == 429:
                raise ApiQuotaExceededError()
            raise ApiUnexpectedResponseError(cause=e)
        except google.auth.exceptions.RefreshError:
            raise TokenExpiredError()
        except requests.exceptions.ConnectionError:
            raise NetworkUnavailableError()
        except requests.exceptions.Timeout:
            raise NetworkTimeoutError()
    return wrapper

def handle_sheet_setup(fn):
    def wrapper(*args, **kwargs):
        try:
            return fn(*args, **kwargs)
        except gspread.exceptions.SpreadsheetNotFound:
            raise SheetNotFoundError()
        except gspread.exceptions.APIError as e:
            if e.response.status_code == 403:
                raise SheetAccessDeniedError()
            raise ApiUnexpectedResponseError(cause=e)
        except requests.exceptions.ConnectionError:
            raise NetworkUnavailableError()
        except requests.exceptions.Timeout:
            raise NetworkTimeoutError()
    return wrapper
```

---

## GoogleSheetsDataSource

Implementação concreta do `DataSourceProtocol` para Google Sheets. Sem `try/except` — toda exceção é tratada em `_error_handlers.py`. Único caso com `try/except` explícito: `_do_prewarm`, porque a thread background precisa guardar o erro na instância para relançar em `wait_ready()`.

```python
# backend/data_source/_google_sheets.py

import json
import threading
from datetime import datetime, timedelta
from pathlib import Path
from typing import Final

import gspread
from google.auth.transport.requests import Request
from google.oauth2.service_account import Credentials

from . import _helper
from ._error_handlers import _guard, handle_api, handle_sheet_setup
from ._utils import normalize_date, to_dicts, to_ranges, date_range

_SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"]


class GoogleSheetsDataSource:

    def __init__(self) -> None:
        self._client: gspread.Client | None   = None
        self._creds: Credentials | None       = None
        self._sheet_id: str | None            = None
        self._ready = threading.Event()
        self._ready.set()
        self._prewarm_error: Exception | None = None

    # ── Estado ────────────────────────────────────────────────────────────

    def is_ready(self) -> bool:
        return self._client is not None and self._sheet_id is not None

    def wait_ready(self, timeout: float = 15.0) -> None:
        self._ready.wait(timeout=timeout)

        if self._prewarm_error is not None:
            raise PrewarmFailedError(cause=self._prewarm_error)

        if not self.is_ready():
            raise DataSourceNotReadyError()

    # ── Ciclo de vida ─────────────────────────────────────────────────────

    def connect(self) -> None:
        if self._restore_session():
            threading.Thread(target=self._do_prewarm, daemon=True).start()

    def set_credentials(self, path: str) -> None:
        with _guard.credentials_file(path):
            raw = Path(path).read_text(encoding="utf-8")

        with _guard.local_storage():
            _helper.write_credentials(raw)

        with _guard.authentication():
            self._authenticate(raw)

    @handle_sheet_setup
    def set_sheet(self, sheet_id: str) -> None:
        _guard.validate_sheet_id(sheet_id)
        self._validate_sheet_access(sheet_id)

        with _guard.local_storage():
            _helper.write_sheet_id(sheet_id)

        self._sheet_id = sheet_id

    # ── Dados ─────────────────────────────────────────────────────────────

    @handle_api
    def fetch_orders_by_date(self, date: str) -> list[dict]:
        self.wait_ready()
        _guard.validate_date(date)
        return self._fetch_cadastro({date})

    @handle_api
    def fetch_orders_by_period(self, start: str, end: str) -> list[dict]:
        self.wait_ready()
        _guard.validate_date(start)
        _guard.validate_date(end)
        _guard.validate_date_range(start, end)
        return self._fetch_cadastro(self._date_range(start, end))

    # ── Interno ───────────────────────────────────────────────────────────

    def _restore_session(self) -> bool:
        raw = _helper.read_credentials()
        if not raw:
            return False

        with _guard.authentication():
            self._authenticate(raw)

        if sheet_id := _helper.read_sheet_id():
            self._sheet_id = sheet_id

        return True

    def _authenticate(self, raw_json: str) -> None:
        info = json.loads(raw_json)
        self._creds  = Credentials.from_service_account_info(info, scopes=_SCOPES)
        self._client = gspread.authorize(self._creds)

    def _do_prewarm(self) -> None:
        self._ready.clear()
        self._prewarm_error = None
        try:
            self._creds.refresh(Request())
            self._client.open_by_key(self._sheet_id)
        except Exception as e:
            self._prewarm_error = e
        finally:
            self._ready.set()

    @handle_api
    def _fetch_cadastro(self, dates: set[str]) -> list[dict]:
        ws     = self._client.open_by_key(self._sheet_id).worksheet("Cadastro")
        header = ws.row_values(1)

        data_col = next(
            (i + 1 for i, h in enumerate(header) if h.strip().upper() == "DATA"),
            None,
        )
        if data_col is None:
            return self._to_dicts(header, ws.get_all_values()[1:])

        normalized = {self._normalize_date(d) for d in dates}
        col_values  = ws.col_values(data_col)

        target_rows = [
            idx for idx, val in enumerate(col_values[1:], start=2)
            if self._normalize_date(val) in normalized
        ]
        if not target_rows:
            return []

        header_len = len(header)
        rows: list[list] = []
        for batch in self._to_ranges(target_rows):
            for value_range in ws.batch_get(batch):
                for row in value_range:
                    if len(row) > header_len:
                        raise UnexpectedSheetStructureError(
                            expected=header_len, got=len(row)
                        )
                    rows.append((row + [""] * max(0, header_len - len(row)))[:header_len])

        return self._to_dicts(header, rows)

data_source: Final = GoogleSheetsDataSource()
```

---

## Utils — DataSource

Funções utilitárias puras do data source. Sem estado, sem dependências externas — só transformações de dado.

```python
# backend/data_source/_utils.py

from datetime import datetime, timedelta


def normalize_date(val: str) -> str | None:
    for fmt in ("%d/%m/%y", "%d/%m/%Y"):
        try:
            return datetime.strptime(val.strip(), fmt).strftime("%d/%m/%Y")
        except ValueError:
            continue
    return None


def to_dicts(header: list[str], rows: list[list]) -> list[dict]:
    keys = [h.lower() for h in header]
    return [dict(zip(keys, row)) for row in rows]


def to_ranges(row_numbers: list[int]) -> list[list[str]]:
    ranges, start, end = [], row_numbers[0], row_numbers[0]
    for r in row_numbers[1:]:
        if r == end + 1:
            end = r
        else:
            ranges.append(f"{start}:{end}")
            start = end = r
    ranges.append(f"{start}:{end}")
    return [ranges[i:i + 100] for i in range(0, len(ranges), 100)]


def date_range(start: str, end: str) -> set[str]:
    d_start  = datetime.strptime(start, "%d/%m/%Y")
    d_end    = datetime.strptime(end,   "%d/%m/%Y")
    dates, current = set(), d_start
    while current <= d_end:
        dates.add(current.strftime("%d/%m/%Y"))
        current += timedelta(days=1)
    return dates
```

---

## SheetsRepository

Recebe `list[dict]` do data source e entrega `DataFrame` para os services. Único lugar que conhece os enums de colunas.

```python
# backend/repositories/sheets_repository.py

import pandas as pd
from pandas import DataFrame

from ..data_source import data_source
from ._columns import Col


class SheetsRepository:

    def get_cadastro_by_date(self, date: str) -> DataFrame:
        rows = data_source.fetch_orders_by_date(date)
        return self._to_dataframe(rows)

    def get_cadastro_by_period(self, start: str, end: str) -> DataFrame:
        rows = data_source.fetch_orders_by_period(start, end)
        return self._to_dataframe(rows)

    @staticmethod
    def _to_dataframe(rows: list[dict]) -> DataFrame:
        if not rows:
            return DataFrame()
        df = DataFrame(rows)
        numeric_cols = [Col.PAYMENT_PENDENT.value]
        for col in numeric_cols:
            if col in df.columns:
                df[col] = pd.to_numeric(
                    df[col].astype(str).str.replace(",", ".", regex=False),
                    errors="coerce",
                ).fillna(0)
        return df
```

---

## BackendServer — inicialização

Ponto de entrada do backend. Controla quando o data source se conecta.

```python
# backend/_server.py

from flask import Flask
from .data_source import data_source
from .routes.orders import orders_bp
from .routes.auth   import auth_bp
from .routes.source import source_bp
from .routes.status import status_bp
from maria_cacau.core.network import HTTPRequest, HTTPResponse


class BackendServer:

    def __init__(self) -> None:
        self._app = Flask(__name__)
        self._app.register_blueprint(orders_bp)
        self._app.register_blueprint(auth_bp)
        self._app.register_blueprint(source_bp)
        self._app.register_blueprint(status_bp)
        self._client = self._app.test_client()
        data_source.connect()

    def execute(self, request: HTTPRequest) -> HTTPResponse:
        flask_response = self._client.open(
            request.path,
            method=request.method,
            query_string=request.params,
            json=request.body,
        )
        return HTTPResponse(
            status_code=flask_response.status_code,
            headers=dict(flask_response.headers),
            body=flask_response.data,
        )
```

---

## before_request — validação de conexão

Registrado em cada Blueprint que acessa dados. Roda antes de qualquer rota do Blueprint.

```python
# exemplo em routes/orders.py

from flask import Blueprint, jsonify
from ..data_source import data_source

orders_bp = Blueprint("orders", __name__)


@orders_bp.before_request
def check_connection():
    if not data_source.is_ready():
        return jsonify({
            "code":         "SHEET_NOT_CONNECTED",
            "user_message": "Planilha não configurada.",
            "dev_message":  "GoogleSheetsDataSource.is_ready() returned False",
        }), 503
```
