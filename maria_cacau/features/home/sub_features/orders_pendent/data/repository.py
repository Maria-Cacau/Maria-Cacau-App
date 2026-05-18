from ..domain.models import DeliveriesSummary, PendentOrder
from .apis import DeliveriesAPI, PaymentsPendentAPI
from .mapper import DeliveriesMapper, PaymentsMapper


class OrdersRepository:
    def get_deliveries(self, date: str) -> DeliveriesSummary:
        response = DeliveriesAPI().for_date(date).call()
        return DeliveriesMapper.from_response(response)

    def get_pendent_payments(self, date: str) -> list[PendentOrder]:
        response = PaymentsPendentAPI().for_date(date).call()
        return PaymentsMapper.from_response(response)
