"""Rotas de autenticação"""

from flask import Blueprint, request

from .service import AuthService

auth_bp = Blueprint("auth", __name__)
_service = AuthService()


@auth_bp.post("/auth")
def connect():
    body = request.json or {}
    _service.connect(body.get("credentials"), body.get("sheet_id"))
    return "", 201


@auth_bp.delete("/auth")
def disconnect():
    _service.disconnect()
    return "", 204
