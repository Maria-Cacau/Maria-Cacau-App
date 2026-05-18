"""Rota de entregas — GET /orders/deliveries."""

from flask import Blueprint, request, jsonify

from .service import DeliveriesService, DeliveriesMapper

deliveries_bp = Blueprint("deliveries", __name__)
_service = DeliveriesService()


@deliveries_bp.get("/orders/deliveries")
def get_deliveries():
    date = request.args.get("date")
    summary = _service.get_by_date(date)
    return jsonify(DeliveriesMapper.to_response(summary)), 200
