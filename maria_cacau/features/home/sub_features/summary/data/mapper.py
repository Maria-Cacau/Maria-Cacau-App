"""Mappers de HTTPResponse para domain models e de HTTPResponseError para ErrorModel."""

from maria_cacau.core.error import ErrorModel, http_error
from maria_cacau.core.network import HTTPResponse, HTTPResponseError

from ..domain.models import OrderDetail, ProductCount


class ErrorMapper:
    @staticmethod
    def from_response(e: HTTPResponseError) -> ErrorModel:
        try:
            data = e.response.json()
        except Exception:
            return http_error(e.status_code)
        return ErrorModel(
            code=data.get("code", "NET"),
            user_message=data.get("user_message", "Erro inesperado."),
            dev_message=data.get("dev_message", str(e)),
        )


class OrdersSummaryMapper:
    @staticmethod
    def from_response(response: HTTPResponse) -> list[OrderDetail]:
        data = response.json()
        return [
            OrderDetail(
                number=order["number"],
                phone=order["customer"]["phone"],
                delivery_type=order["delivery"]["type"],
                delivery_date=order["delivery"]["date"],
                products=[
                    ProductCount(name=p["name"], quantity=p["quantity"])
                    for p in order["products"]
                ],
            )
            for order in data["orders"]
        ]
