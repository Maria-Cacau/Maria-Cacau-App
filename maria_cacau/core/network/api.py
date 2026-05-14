"""Comunicação alto nivel para chamadas de api"""

from abc import ABC, abstractmethod
from typing import TypeVar, Type, final

from ._request import HTTPRequest
from ._response import HTTPResponse
from ._config import get_client


EntityT = TypeVar("EntityT")


class API(ABC):
    def __init__(self) -> None:
        super().__init__()
        self.parameters = HTTPRequest(path=self.path)

    @property
    @abstractmethod
    def path(self) -> str: ...


    @final
    def call(self) -> HTTPResponse:
        """Realiza a request"""
        return get_client().execute(self.parameters)

    @final
    def entity(self, cls: Type[EntityT]) -> EntityT:
        """O tipo precisa aceitar **kwargs (dataclass ou similar)."""
        return cls(**self.call().json())
