import functools
import json
from contextlib import contextmanager
from datetime import datetime

import google.auth.exceptions
import gspread
import requests

from .._utils import normalize_date
from ._errors import *


def _is_valid_date(value: str) -> bool:
    return normalize_date(value) is not None


def _parse_date(value: str) -> datetime:
    return datetime.strptime(normalize_date(value), "%d/%m/%Y")


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
            raise CredentialsFormatError()
        except google.auth.exceptions.TransportError:
            raise NetworkUnavailableError()
        except Exception:
            raise InvalidCredentialsError()

    # ── Validações ────────────────────────────────────────────────────────

    def validate_credentials(self, credentials: dict) -> None:
        if not credentials:
            raise CredentialsFormatError()

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
    @functools.wraps(fn)
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
    @functools.wraps(fn)
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
