from maria_cacau.core.network import HTTPResponse

from ..domain.models import DeliveryCount, DeliveriesSummary, PendentOrder


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
