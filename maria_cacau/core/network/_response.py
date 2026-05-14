import json
from dataclasses import dataclass


@dataclass
class HTTPResponse:
    status_code: int
    headers:     dict[str, str]
    body:        bytes

    def json(self) -> dict:
        r"""Decodifica o body para um objeto."""
        return json.loads(self.body)

    @property
    def is_success(self) -> bool:        
        r"""Indica se a resposta foi bem sucedida (status code 2xx)."""
        return 200 <= self.status_code < 300