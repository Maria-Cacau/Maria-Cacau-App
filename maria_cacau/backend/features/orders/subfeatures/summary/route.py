"""Rota de pedidos — GET /orders."""

from flask import Blueprint, request, jsonify

from .service import OrdersService, OrdersMapper

summary_bp = Blueprint("summary", __name__)
_service = OrdersService()


@summary_bp.get("/orders")
def get_orders():
    start = request.args.get("start")
    end   = request.args.get("end")
    result = _service.get_by_period(start, end)
    return jsonify(OrdersMapper.to_response(result)), 200
