"""Observabilidade da camada de network."""

import time
from enum import Enum
from typing import Callable, TypeVar

from ..observability import observability
from ._request import HTTPRequest
from ._response import HTTPResponse


class NetworkEvent(Enum):
    HTTP_REQUEST = 'HTTP_REQUEST'   # extra: path=, method=, status=, duration_s=


T = TypeVar('T', bound=HTTPResponse)


def track(request: HTTPRequest, action: Callable[[], T]) -> T:
    start = time.perf_counter()

    response = action()
    
    duration_s = round(time.perf_counter() - start, 3)
    observability.log(
        NetworkEvent.HTTP_REQUEST,
        path=request.path,
        method=request.method,
        status=response.status_code,
        duration_s=duration_s,
    )
    return response
