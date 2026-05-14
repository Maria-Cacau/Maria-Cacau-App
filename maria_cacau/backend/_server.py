from flask import Flask

from .routes.orders import orders_bp
from ..core.network._request import HTTPRequest
from ..core.network._response import HTTPResponse


_app = Flask(__name__)
_app.register_blueprint(orders_bp)
_client = _app.test_client()


class BackendServer:
    def execute(self, request: HTTPRequest) -> HTTPResponse:
        response = _client.open(
            request.path,
            method=request.method,
            query_string=request.params,
            json=request.body,
        )
        return HTTPResponse(
            status_code=response.status_code,
            headers=dict(response.headers),
            body=response.data,
        )