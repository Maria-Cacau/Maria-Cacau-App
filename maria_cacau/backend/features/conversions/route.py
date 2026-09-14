"""Rotas de conversões — GET /conversions/pending/<pedido>."""

from flask import Blueprint, jsonify

from ...data_source import data_source
from ...data_source.errors._errors import DataSourceNotReadyError
from .service import ConversionsMapper, ConversionsService

conversions_bp = Blueprint("conversions", __name__)
_service = ConversionsService()


@conversions_bp.before_request
def check_connection():
    if not data_source.is_ready():
        raise DataSourceNotReadyError()


@conversions_bp.get("/conversions/pending/<number>")
def get_pending(number: str):
    result = _service.get_pending(number)
    return jsonify(ConversionsMapper.to_response(result)), 200
