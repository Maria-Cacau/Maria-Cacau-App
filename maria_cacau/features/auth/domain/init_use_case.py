from maria_cacau.features.sheets.data import SheetsRepository

from ..data import AuthRepository
from ..data.apis import ConnectAuthAPI


class AppInitUseCase:
    def __init__(self) -> None:
        self._auth   = AuthRepository()
        self._sheets = SheetsRepository()

    def initialize(self) -> None:
        credentials = self._auth.read_credentials()
        if not credentials:
            return

        sheet_id = self._sheets.last_sheet_id_from_cache()
        if not sheet_id:
            return
        
        ConnectAuthAPI().with_credentials(credentials, sheet_id=sheet_id).call()
