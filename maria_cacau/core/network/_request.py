"""Dados e parâmetros de uma request"""

from dataclasses import dataclass, field

from ._method import HTTPMethod


@dataclass
class HTTPRequest:
    path:    str                              # só o /caminho, sem base_url
    method:  HTTPMethod            = HTTPMethod.GET
    headers: dict[str, str]        = field(default_factory=dict)
    params:  dict[str, str] | None = None     # query params: ?a=1&b=2
    body:    dict | None           = None     # payload JSON