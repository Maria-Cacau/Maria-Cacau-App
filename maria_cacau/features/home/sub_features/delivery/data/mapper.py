"""Mappers de HTTPResponse para domain models e de HTTPResponseError para ErrorModel."""

from maria_cacau.core.error import ErrorModel, http_error
from maria_cacau.core.network import HTTPResponse, HTTPResponseError

from ..domain.models import DeliveriesSummary, DeliveryCount, PendentOrder


class ErrorMapper:
    @staticmethod
    def from_response(e: HTTPResponseError) -> ErrorModel:
        """Lê o JSON do backend; cai em http_error genérico se o corpo não for JSON válido."""
        try:
            data = e.response.json()
        except Exception:
            return http_error(e.status_code)
        return ErrorModel(
            code=data.get("code", "NET"),
            user_message=data.get("user_message", "Erro inesperado."),
            dev_message=data.get("dev_message", str(e)),
        )


class DeliveriesMapper:
    @staticmethod
    def from_response(response: HTTPResponse) -> DeliveriesSummary:
        data = response.json()
        deliveries = [DeliveryCount(**item) for item in data["deliveries"]]
        return DeliveriesSummary(
            unique=data["unique"],
            total=data["total"],
            deliveries=deliveries,
        )


class PaymentsMapper:
    @staticmethod
    def from_response(response: HTTPResponse) -> list[PendentOrder]:
        data = response.json()
        return [
            PendentOrder(
                number=order["number"],
                name=order["customer"]["name"],
                phone=order["customer"]["phone"],
                delivery_type=order["delivery"]["type"],
                amount_pendent=order["financial"]["amount_pendent"],
            )
            for order in data["orders"]
        ]
