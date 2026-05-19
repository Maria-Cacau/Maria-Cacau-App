"""Endpoints do backend consumidos pela feature Auth."""

from maria_cacau.core.network._method import HTTPMethod
from maria_cacau.core.network.api import API


class ConnectAuthAPI(API):
    def __init__(self) -> None:
        super().__init__()
        self.parameters.method = HTTPMethod.POST

    @property
    def path(self) -> str:
        return "/auth"

    def with_credentials(self, credentials: dict, sheet_id: str | None = None) -> "ConnectAuthAPI":
        self.parameters.body = {"credentials": credentials, "sheet_id": sheet_id}
        return self


class DisconnectAuthAPI(API):
    def __init__(self) -> None:
        super().__init__()
        self.parameters.method = HTTPMethod.DELETE

    @property
    def path(self) -> str:
        return "/auth"
