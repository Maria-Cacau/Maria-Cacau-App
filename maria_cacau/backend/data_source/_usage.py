"""Contagem de chamadas à API da fonte de dados por request do backend — a cota do Google Sheets é
por número de chamadas, então é isso que precisa ser medido."""

from contextvars import ContextVar
from dataclasses import dataclass


@dataclass
class ApiUsage:
    reads:  int = 0
    writes: int = 0


_current: ContextVar[ApiUsage | None] = ContextVar("data_source_api_usage", default=None)


def start_api_usage() -> ApiUsage:
    usage = ApiUsage()
    _current.set(usage)
    return usage


def current_api_usage() -> ApiUsage | None:
    return _current.get()


def track_api_usage(http_client) -> None:
    """Envolve o `request` do client HTTP do gspread, por onde passa toda chamada à API."""
    original = http_client.request

    def request(*args, **kwargs):
        usage  = _current.get()
        method = kwargs.get("method") or (args[0] if args else "")
        if usage is not None:
            if str(method).upper() == "GET":
                usage.reads += 1
            else:
                usage.writes += 1
        return original(*args, **kwargs)

    http_client.request = request
