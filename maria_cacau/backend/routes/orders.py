from flask import Blueprint, request, jsonify
from ..services.orders_service import OrdersService

orders_bp = Blueprint("orders", __name__, url_prefix="/orders")
_service = OrdersService()


@orders_bp.get("/deliveries")
def get_deliveries():
    date = request.args.get("date")
    data = _service.get_deliveries(date)
    return jsonify(data), 200


@orders_bp.get("/payments-pendent")
def get_payments_pendent():
    date = request.args.get("date")
    data = _service.get_payments_pendent(date)
    return jsonify(data), 200