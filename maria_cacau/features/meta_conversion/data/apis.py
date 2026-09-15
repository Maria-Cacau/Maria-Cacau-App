"""Definição dos endpoints do backend consumidos pela feature Meta Conversion."""

from urllib.parse import quote

from maria_cacau.core.network import HTTPMethod
from maria_cacau.core.network.api import API


class OrderAPI(API):
    def __init__(self, number: str) -> None:
        self._number = number
        super().__init__()

    @property
    def path(self) -> str:
        return f"/orders/{quote(self._number, safe='')}"


class ConversionAPI(API):
    def __init__(self, number: str) -> None:
        self._number = number
        super().__init__()
        self.parameters.method = HTTPMethod.PUT

    @property
    def path(self) -> str:
        return f"/orders/{quote(self._number, safe='')}/conversion"
