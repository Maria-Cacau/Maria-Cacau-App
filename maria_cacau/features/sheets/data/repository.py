import re
from pathlib import Path

from maria_cacau.core import session
from maria_cacau.core.storage import CacheStorage

from ..domain.models import SheetModel
from .apis import RemoveSheetAPI, SelectSheetAPI

_SHEETS_KEY = "sheets"

_cache = CacheStorage(Path.home() / ".mariacacau")

_SHEET_ID_RE = re.compile(r"/spreadsheets/d/([a-zA-Z0-9_-]+)")


def _extract_sheet_id(url: str) -> str:
    m = _SHEET_ID_RE.search(url)
    if not m:
        raise ValueError(f"URL inválida: {url}")
    return m.group(1)


class SheetsRepository:
    def connect(self, link: str, name: str) -> SheetModel:
        sheet_id = _extract_sheet_id(link)
        sheets   = self._load_raw()

        existing = next((s for s in sheets if s["sheet_id"] == sheet_id), None)
        if existing:
            existing["nome"] = name
        else:
            sheets.append({"nome": name, "sheet_id": sheet_id})
        _cache.save(sheets, _SHEETS_KEY)

        if session.is_authenticated:
            SelectSheetAPI(sheet_id).call()

        return SheetModel(name=name, sheet_id=sheet_id)

    def select(self, sheet_id: str) -> SheetModel:
        SelectSheetAPI(sheet_id).call()
        sheets = self._load_raw()
        raw    = next((s for s in sheets if s["sheet_id"] == sheet_id), None)
        return SheetModel(name=raw["nome"] if raw else sheet_id, sheet_id=sheet_id)

    def find_by_link(self, link: str) -> SheetModel | None:
        try:
            sheet_id = _extract_sheet_id(link)
        except ValueError:
            return None
        raw = next((s for s in self._load_raw() if s["sheet_id"] == sheet_id), None)
        return SheetModel(name=raw["nome"], sheet_id=raw["sheet_id"]) if raw else None

    def load_all(self) -> list[SheetModel]:
        return [SheetModel(name=s["nome"], sheet_id=s["sheet_id"]) for s in self._load_raw()]

    def remove(self, sheet_id: str) -> SheetModel:
        sheets = self._load_raw()
        raw    = next((s for s in sheets if s["sheet_id"] == sheet_id), None)
        _cache.save([s for s in sheets if s["sheet_id"] != sheet_id], _SHEETS_KEY)

        if session.active_sheet_id == sheet_id:
            RemoveSheetAPI().call()

        return SheetModel(name=raw["nome"] if raw else sheet_id, sheet_id=sheet_id)

    def update_name(self, sheet_id: str, new_name: str) -> SheetModel:
        sheets = self._load_raw()
        for s in sheets:
            if s["sheet_id"] == sheet_id:
                s["nome"] = new_name
                break
        _cache.save(sheets, _SHEETS_KEY)
        return SheetModel(name=new_name, sheet_id=sheet_id)

    def last_sheet_id_from_cache(self) -> str | None:
        """Retorna o sheet_id da última planilha salva em cache, sem HTTP."""
        sheets = self._load_raw()
        return sheets[-1]["sheet_id"] if sheets else None

    def _load_raw(self) -> list[dict]:
        return _cache.retrieve(_SHEETS_KEY) or []
