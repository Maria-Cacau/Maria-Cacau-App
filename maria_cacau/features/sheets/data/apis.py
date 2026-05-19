from maria_cacau.core.network._method import HTTPMethod
from maria_cacau.core.network.api import API


class SelectSheetAPI(API):
    def __init__(self, sheet_id: str) -> None:
        self._sheet_id = sheet_id
        super().__init__()
        self.parameters.method = HTTPMethod.PUT

    @property
    def path(self) -> str:
        return f"/sheet/{self._sheet_id}"


class RemoveSheetAPI(API):
    def __init__(self) -> None:
        super().__init__()
        self.parameters.method = HTTPMethod.DELETE

    @property
    def path(self) -> str:
        return "/sheet"
