from pathlib import Path

from maria_cacau.core.storage.cache import CacheStorage
from maria_cacau.core.storage.security import SecurityStorage

_BASE_DIR    = Path.home() / '.mariacacau'
_security    = SecurityStorage()
_cache       = CacheStorage(_BASE_DIR)

_CREDS_KEY   = "google-credentials"
_SHEETS_KEY  = "sheets"


# ── Credenciais (dado sensível) ───────────────────────────────────────────

def read_credentials() -> str | None:
    return _security.retrieve(_CREDS_KEY)

def write_credentials(raw: str) -> None:
    _security.save(raw, _CREDS_KEY)


def delete_credentials() -> None:
    _security.delete(_CREDS_KEY)


# ── Planilhas (lista de {nome, sheet_id}) ─────────────────────────────────

def read_sheets() -> list[dict] | None:
    return _cache.retrieve(_SHEETS_KEY)


def write_sheets(sheets: list[dict]) -> None:
    _cache.save(sheets, _SHEETS_KEY)
