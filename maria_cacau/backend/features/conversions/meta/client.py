"""Client HTTP para a Conversions API da Meta."""

import json
from dataclasses import dataclass

import requests

_VERSION   = "v26.0"
_GRAPH_URL = f"https://graph.facebook.com/{_VERSION}"


class MetaClientError(Exception):
    """Falha ao falar com a Graph API — rede indisponível ou timeout."""


@dataclass
class MetaResponse:
    status_code: int
    body: dict


def send_events(
    events: list[dict],
    *,
    access_token: str,
    dataset_id: str,
    test_event_code: str | None = None,
    timeout: float = 30.0,
) -> MetaResponse:
    """Envia um lote de eventos num único `POST` — o limite da Meta é 1.000 eventos por
    requisição. `test_event_code` desvia o lote para a área de teste, sem afetar otimização,
    atribuição ou relatório."""
    data = {"access_token": access_token, "data": json.dumps(events)}
    if test_event_code:
        data["test_event_code"] = test_event_code

    try:
        response = requests.post(f"{_GRAPH_URL}/{dataset_id}/events", data=data, timeout=timeout)
    except requests.exceptions.RequestException as exc:
        raise MetaClientError(str(exc)) from exc

    return MetaResponse(status_code=response.status_code, body=response.json())
