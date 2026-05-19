from maria_cacau.core import session
from maria_cacau.features.sheets.data import SheetsRepository

from ..data import AuthRepository


class AppInitUseCase:
    def __init__(self) -> None:
        self._auth   = AuthRepository()
        self._sheets = SheetsRepository()

    def initialize(self) -> None:
        credentials = self._auth.read_credentials()
        session.has_credentials_cached = credentials is not None
        if not credentials:
            return

        sheet_id = self._sheets.last_sheet_id_from_cache()
        session.has_sheet_cached = sheet_id is not None

        try:
            self._auth.pre_login(sheet_id)
            session.is_authenticated = True
        except Exception:
            return

        if not sheet_id:
            return

        session.active_sheet_id = sheet_id
        sheets = self._sheets.load_all()
        match = next((s for s in sheets if s.sheet_id == sheet_id), None)
        session.active_sheet_name = match.name if match else None
