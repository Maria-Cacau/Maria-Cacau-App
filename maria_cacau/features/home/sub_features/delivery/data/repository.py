from maria_cacau.core.network import HTTPResponseError

from ..domain.models import DeliveriesSummary, PendentOrder
from .apis import DeliveriesAPI, PaymentsPendentAPI
from .mapper import DeliveriesMapper, ErrorMapper, PaymentsMapper


class OrdersRepository:
    def get_deliveries(self, date: str) -> DeliveriesSummary:
        try:
            response = DeliveriesAPI().for_date(date).call()
        except HTTPResponseError as e:
            raise ErrorMapper.from_response(e)
        return DeliveriesMapper.from_response(response)

    def get_pendent_payments(self, date: str) -> list[PendentOrder]:
        try:
            response = PaymentsPendentAPI().for_date(date).call()
        except HTTPResponseError as e:
            raise ErrorMapper.from_response(e)
        return PaymentsMapper.from_response(response)
