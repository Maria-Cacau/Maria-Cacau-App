"""Rota de pagamentos — GET /orders/payments-pendent."""

from flask import Blueprint, request, jsonify

from .....data_source import data_source
from .service import PaymentsService, PaymentsMapper

payments_bp = Blueprint("payments", __name__)
_service = PaymentsService()


@payments_bp.before_request
def check_connection():
    if not data_source.is_ready():
        return jsonify({
            "code":         "SHEET_NOT_CONNECTED",
            "user_message": "Planilha não configurada.",
            "dev_message":  "GoogleSheetsDataSource.is_ready() returned False",
        }), 503


@payments_bp.get("/orders/payments-pendent")
def get_payments_pendent():
    date = request.args.get("date")
    result = _service.get_pendent(date)
    return jsonify(PaymentsMapper.to_response(result)), 200
