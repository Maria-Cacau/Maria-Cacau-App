"""Repository da feature Delivery: chama as APIs e converte erros HTTP em ErrorModel."""

from maria_cacau.core.network import HTTPResponseError
from maria_cacau.core.bus import bus
from maria_cacau.core.services import Services

from ..domain.models import DeliveriesSummary, PendentOrder
from .apis import DeliveriesAPI, PaymentsPendentAPI
from .mapper import DeliveriesMapper, ErrorMapper, PaymentsMapper


class OrdersRepository:
    def get_deliveries(self, date: str) -> DeliveriesSummary:
        bus.request_started.emit(Services.DELIVERY)
        try:
            response = DeliveriesAPI().for_date(date).call()
        except HTTPResponseError as e:
            raise ErrorMapper.from_response(e)
        finally:
            bus.request_finished.emit(Services.DELIVERY)
        return DeliveriesMapper.from_response(response)

    def get_pendent_payments(self, date: str) -> list[PendentOrder]:
        bus.request_started.emit(Services.PAYMENTS)
        try:
            response = PaymentsPendentAPI().for_date(date).call()
        except HTTPResponseError as e:
            raise ErrorMapper.from_response(e)
        finally:
            bus.request_finished.emit(Services.PAYMENTS)
        return PaymentsMapper.from_response(response)
