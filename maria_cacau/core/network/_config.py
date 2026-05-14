"""Configurações globais para uso do módulo"""

from typing import TYPE_CHECKING

from ._errors import NetworkNotConfiguredError

if TYPE_CHECKING:
    from ._client import HTTPClientContract


_active_client: "HTTPClientContract | None" = None
_override_client: "HTTPClientContract | None" = None


def configure(client: "HTTPClientContract") -> None:
    """Configura o client ativo."""
    global _active_client
    _active_client = client

def override(client: "HTTPClientContract") -> None:
    """Substitui o client — útil para testes ou WireMock."""
    global _override_client
    _override_client = client

def clear_override() -> None:
    """Remove o override. Volta ao client padrão."""
    global _override_client
    _override_client = None

def get_client() -> "HTTPClientContract":
    """Retorna o client ativo (override se existir, padrão caso contrário)."""
    client = _override_client or _active_client
    if client is None:
        raise NetworkNotConfiguredError()
    return client