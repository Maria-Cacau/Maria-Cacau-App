"""Repositório da Meta — único lugar que fala com a Conversions API e lê a credencial dela.

A credencial vem do mesmo storage que o app usa: o backend roda dentro do app, então reaproveita
o storage em vez de receber a credencial por rota. É lida a cada chamada, então trocar a
credencial já vale no próximo envio.
"""

import json
from dataclasses import dataclass
from pathlib import Path

import requests

from .......core.storage import CacheStorage, SecurityStorage, StorageKey
from ..errors import (MetaAuthError, MetaNotConfiguredError, MetaRejectedError,
                      MetaUnavailableError)

_VERSION   = "v26.0"
_GRAPH_URL = f"https://graph.facebook.com/{_VERSION}"

# Códigos de erro da Graph API. Limite de requisição também chega com tipo OAuthException, então a
# classificação é pelo código, não pelo tipo.
_RATE_LIMIT_CODES = frozenset({4, 17, 32, 613})
_AUTH_CODES       = frozenset({102, 190, 10})


@dataclass(frozen=True)
class _Credentials:
    access_token:    str
    dataset_id:      str
    test_event_code: str | None = None


class MetaRepository:
    def __init__(self) -> None:
        self._security = SecurityStorage()
        self._cache    = CacheStorage(Path.home() / ".mariacacau")

    def ensure_configured(self) -> None:
        self._credentials()

    def is_test_mode(self) -> bool:
        settings = self._cache.retrieve(StorageKey.META_SETTINGS) or {}
        return bool(settings.get("test_event_code"))

    def send_event(self, event: dict, *, timeout: float = 30.0) -> dict:
        """Com `test_event_code`, o evento cai na área de teste, sem afetar otimização, atribuição
        ou relatório."""
        credentials = self._credentials()
        data = {"access_token": credentials.access_token, "data": json.dumps([event])}
        if credentials.test_event_code:
            data["test_event_code"] = credentials.test_event_code

        try:
            response = requests.post(f"{_GRAPH_URL}/{credentials.dataset_id}/events", data=data, timeout=timeout)
            body = response.json()
        except (requests.exceptions.RequestException, ValueError) as exc:
            raise MetaUnavailableError(str(exc))

        if response.ok:
            return body

        error  = body.get("error", {}) if isinstance(body, dict) else {}
        code   = error.get("code")
        detail = f"[{response.status_code}] {error.get('message', '')} (fbtrace_id={error.get('fbtrace_id', '')})"

        # Indisponibilidade não é recusa: marcar `Negado` travaria na tela um pedido que só pegou
        # instabilidade da Meta.
        if response.status_code == 429 or response.status_code >= 500 or code in _RATE_LIMIT_CODES:
            raise MetaUnavailableError(detail)
        if code in _AUTH_CODES or (isinstance(code, int) and 200 <= code < 300):
            raise MetaAuthError(detail)
        raise MetaRejectedError(detail)

    def _credentials(self) -> _Credentials:
        token    = self._security.retrieve(StorageKey.META_ACCESS_TOKEN)
        settings = self._cache.retrieve(StorageKey.META_SETTINGS) or {}
        if not token or not settings.get("dataset_id"):
            raise MetaNotConfiguredError()
        return _Credentials(token, settings["dataset_id"], settings.get("test_event_code") or None)
