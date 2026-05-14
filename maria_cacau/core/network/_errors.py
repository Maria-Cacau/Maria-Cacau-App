"""Erros mapeados usados no módulo"""

from enum import StrEnum

from ._response import HTTPResponse


### BASE
class NetworkError(Exception):
    r"""Erro base da camada de network."""


### ERRORS
class NetworkNotConfiguredError(NetworkError):
    """configure() não foi chamado antes de usar a lib."""
    def __init__(self):
        super().__init__(ErrorMessages.E001)

class HTTPRequestError(NetworkError):
    """Erro antes de receber resposta (conectividade, timeout, URL inválida)."""
    def __init__(self, message: str, cause: Exception | None = None):
        super().__init__(message)
        self.cause = cause

class HTTPResponseError(NetworkError):
    """Resposta recebida com status de erro (4xx, 5xx)."""
    def __init__(self, status_code: int, response: HTTPResponse):
        super().__init__(f"HTTP {status_code}")
        self.status_code = status_code
        self.response = response


### MESSAGES
class ErrorMessages(StrEnum):
    E001 = "Network não configurada. Chame configure() antes de fazer requests."