"""Rota de pagamentos — GET /orders/payments-pendent."""

from flask import Blueprint, jsonify, request

from .service import PaymentsMapper, PaymentsService

payments_bp = Blueprint("payments", __name__)
_service = PaymentsService()


@payments_bp.get("/orders/payments-pendent")
def get_payments_pendent():
    date = request.args.get("date")
    result = _service.get_pendent(date)
    return jsonify(PaymentsMapper.to_response(result)), 200
