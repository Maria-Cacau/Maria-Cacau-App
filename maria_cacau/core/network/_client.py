"""Realiza as request de fato"""

from typing import Protocol

import _observability as observability
from ._request import HTTPRequest
from ._response import HTTPResponse

### MARK: - CONTRACTS

## Protocol = duck typing explícito: não precisa herdar, só implementar execute().
class HTTPClientContract(Protocol):
    """Contrato que qualquer client precisa cumprir."""
    def execute(self, request: HTTPRequest) -> HTTPResponse: ...


### MARK: - IMPLEMENTATIONS

class LocalClient:
    """
    Roteia requests para o backend local (in-process).
    Nenhuma rede envolvida — Python chamando Python diretamente.
    """
    def __init__(self, backend: HTTPClientContract):
        self._backend = backend

    def execute(self, request: HTTPRequest) -> HTTPResponse:
        return observability.track(request, lambda: self._backend.execute(request))
