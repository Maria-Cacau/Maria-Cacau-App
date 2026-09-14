"""Client HTTP para a Conversions API da Meta, com a credencial guardada em memória."""

import json
import threading
from dataclasses import dataclass
from typing import Final

import requests

from ._errors import (MetaAuthError, MetaNotConfiguredError,
                      MetaRejectedError, MetaUnavailableError)

_VERSION   = "v26.0"
_GRAPH_URL = f"https://graph.facebook.com/{_VERSION}"

# Token inválido, expirado ou sem permissão — a Graph API sinaliza pelo tipo/código do erro.
_OAUTH_TYPE = "OAuthException"
_OAUTH_CODE = 190


@dataclass(frozen=True)
class _Credentials:
    access_token:    str
    dataset_id:      str
    test_event_code: str | None


class MetaClient:
    def __init__(self) -> None:
        self._credentials: _Credentials | None = None
        self._lock = threading.Lock()

    def is_ready(self) -> bool:
        return self._credentials is not None

    @property
    def is_test_mode(self) -> bool:
        return self._credentials is not None and bool(self._credentials.test_event_code)

    def set_credentials(self, access_token: str, dataset_id: str, test_event_code: str | None = None) -> None:
        with self._lock:
            self._credentials = _Credentials(access_token, dataset_id, test_event_code or None)

    def clear_credentials(self) -> None:
        with self._lock:
            self._credentials = None

    def send_events(self, events: list[dict], *, timeout: float = 30.0) -> dict:
        """Envia um lote num único `POST` (limite da Meta: 1.000 eventos). Com `test_event_code`,
        o lote cai na área de teste, sem afetar otimização, atribuição ou relatório."""
        credentials = self._credentials
        if credentials is None:
            raise MetaNotConfiguredError()

        data = {"access_token": credentials.access_token, "data": json.dumps(events)}
        if credentials.test_event_code:
            data["test_event_code"] = credentials.test_event_code

        try:
            response = requests.post(f"{_GRAPH_URL}/{credentials.dataset_id}/events", data=data, timeout=timeout)
            body = response.json()
        except (requests.exceptions.RequestException, ValueError) as exc:
            raise MetaUnavailableError(exc)

        if response.ok:
            return body

        error = body.get("error", {})
        if error.get("type") == _OAUTH_TYPE or error.get("code") == _OAUTH_CODE:
            raise MetaAuthError(error.get("message", ""))
        raise MetaRejectedError(response.status_code, error.get("message", ""))


meta_client: Final = MetaClient()
