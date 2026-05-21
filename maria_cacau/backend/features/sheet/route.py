"""Rotas de planilhas"""

from flask import Blueprint

from .service import SheetService

sheet_bp = Blueprint("sheet", __name__)
_service = SheetService()


@sheet_bp.put("/sheet/<sheet_id>")
def select_sheet(sheet_id: str):
    _service.select(sheet_id)
    return "", 204


@sheet_bp.delete("/sheet")
def remove_sheet():
    _service.remove()
    return "", 204
