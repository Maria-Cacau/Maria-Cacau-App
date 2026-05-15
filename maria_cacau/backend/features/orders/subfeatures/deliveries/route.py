"""Rota de entregas — GET /orders/deliveries."""

from flask import Blueprint, request, jsonify

from .....data_source import data_source
from .service import DeliveriesService, DeliveriesMapper

deliveries_bp = Blueprint("deliveries", __name__)
_service = DeliveriesService()


@deliveries_bp.before_request
def check_connection():
    if not data_source.is_ready():
        return jsonify({
            "code":         "SHEET_NOT_CONNECTED",
            "user_message": "Planilha não configurada.",
            "dev_message":  "GoogleSheetsDataSource.is_ready() returned False",
        }), 503


@deliveries_bp.get("/orders/deliveries")
def get_deliveries():
    date = request.args.get("date")
    summary = _service.get_by_date(date)
    return jsonify(DeliveriesMapper.to_response(summary)), 200
