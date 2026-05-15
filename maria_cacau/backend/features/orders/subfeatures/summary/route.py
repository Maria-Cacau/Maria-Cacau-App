"""Rota de pedidos — GET /orders."""

from flask import Blueprint, request, jsonify

from .....data_source import data_source
from .service import OrdersService, OrdersMapper

orders_bp = Blueprint("orders", __name__)
_service = OrdersService()


@orders_bp.before_request
def check_connection():
    if not data_source.is_ready():
        return jsonify({
            "code":         "SHEET_NOT_CONNECTED",
            "user_message": "Planilha não configurada.",
            "dev_message":  "GoogleSheetsDataSource.is_ready() returned False",
        }), 503


@orders_bp.get("/orders")
def get_orders():
    start = request.args.get("start")
    end   = request.args.get("end")
    result = _service.get_by_period(start, end)
    return jsonify(OrdersMapper.to_response(result)), 200
