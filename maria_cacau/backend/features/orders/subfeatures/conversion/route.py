"""Rota de conversão — PUT /orders/<pedido>/conversion."""

from flask import Blueprint

from .service import ConversionService

conversion_bp = Blueprint("conversion", __name__)
_service = ConversionService()


@conversion_bp.put("/orders/<number>/conversion")
def put_conversion(number: str):
    _service.send(number)
    return "", 204
