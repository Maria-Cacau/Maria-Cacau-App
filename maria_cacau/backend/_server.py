from flask import Flask, jsonify

from ..core.network import HTTPRequest, HTTPResponse
from .data_source import DataSourceError
from .errors import generic_mapper, translate, BackendError
from .features import *

_app = Flask(__name__)
_app.register_blueprint(orders_bp)
_app.register_blueprint(auth_bp)
_app.register_blueprint(sheet_bp)


@_app.errorhandler(DataSourceError)
def handle_data_source_error(e: DataSourceError):
    err = translate(e)
    return jsonify(err.to_dict()), err.http_status


@_app.errorhandler(BackendError)
def handle_backend_error(e: BackendError):
    return jsonify(e.to_dict()), e.http_status


@_app.errorhandler(Exception)
def handle_unexpected_error(e: Exception):
    err = generic_mapper(e)
    return jsonify(err.to_dict()), err.http_status


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
