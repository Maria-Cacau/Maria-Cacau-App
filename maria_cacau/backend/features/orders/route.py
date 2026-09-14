"""Rotas de pedidos — GET /orders e GET /orders/<pedido>, e registro das subfeatures."""

from flask import Blueprint, jsonify, request

from ...data_source import data_source
from ...data_source.errors._errors import DataSourceNotReadyError
from .service import OrdersMapper, OrdersService
from .subfeatures import deliveries_bp, payments_bp

orders_bp = Blueprint("orders", __name__)
orders_bp.register_blueprint(deliveries_bp)
orders_bp.register_blueprint(payments_bp)
_service = OrdersService()


@orders_bp.before_request
def check_connection():
    if not data_source.is_ready():
        raise DataSourceNotReadyError()


@orders_bp.get("/orders")
def get_orders():
    start = request.args.get("start")
    end   = request.args.get("end")
    result = _service.get_by_period(start, end)
    return jsonify(OrdersMapper.to_response(result)), 200


@orders_bp.get("/orders/<number>")
def get_order(number: str):
    result = _service.get_by_number(number)
    return jsonify(OrdersMapper.to_item_response(result)), 200
