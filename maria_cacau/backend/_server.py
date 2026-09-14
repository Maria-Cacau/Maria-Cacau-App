from enum import Enum

from flask import Flask, jsonify, request

from ..core.network import HTTPRequest, HTTPResponse
from ..core.observability import observability
from .data_source import DataSourceError, current_api_usage, start_api_usage
from .errors import BackendError, generic_mapper, translate
from .features import *

_app = Flask(__name__)
_app.register_blueprint(orders_bp)
_app.register_blueprint(auth_bp)
_app.register_blueprint(sheet_bp)


class BackendEvent(Enum):
    DATA_SOURCE_API = 'DATA_SOURCE_API'  # extra: path=, method=, reads=, writes=


@_app.before_request
def start_usage_tracking():
    start_api_usage()


@_app.after_request
def log_usage(response):
    usage = current_api_usage()
    if usage is not None and (usage.reads or usage.writes):
        observability.log(
            BackendEvent.DATA_SOURCE_API,
            path=request.path, method=request.method, reads=usage.reads, writes=usage.writes,
        )
    return response


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
