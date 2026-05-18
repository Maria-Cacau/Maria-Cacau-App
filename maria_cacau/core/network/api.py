"""Comunicação alto nivel para chamadas de api"""

from abc import ABC, abstractmethod
from typing import Type, TypeVar, final

from ._config import get_client
from ._errors import HTTPResponseError
from ._request import HTTPRequest
from ._response import HTTPResponse

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
        response = get_client().execute(self.parameters)
        if not response.is_success:
            raise HTTPResponseError(response.status_code, response)
        return response

    @final
    def entity(self, cls: Type[EntityT]) -> EntityT:
        """O tipo precisa aceitar **kwargs (dataclass ou similar)."""
        return cls(**self.call().json())
