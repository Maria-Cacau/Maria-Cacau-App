"""Repository da feature Delivery: chama as APIs e converte erros HTTP em ErrorModel."""

from maria_cacau.core.bus import bus
from maria_cacau.core.network import HTTPResponseError
from maria_cacau.core.observability import observability

from ..domain.events import FeatureEvents as ObsEv
from ..domain.models import DeliveriesSummary, PendentOrder
from .apis import DeliveriesAPI, PaymentsPendentAPI
from .mapper import DeliveriesMapper, ErrorMapper, PaymentsMapper


class OrdersRepository:
    def __init__(self) -> None:
        self._deliveries_cache: dict[str, DeliveriesSummary]  = {}
        self._payments_cache:   dict[str, list[PendentOrder]] = {}
        bus.cache_cleared.connect(self._clear_cache)

    def get_deliveries(self, date: str) -> DeliveriesSummary:
        if date in self._deliveries_cache:
            observability.log(ObsEv.CACHE_HIT)
            return self._deliveries_cache[date]
        try:
            response = DeliveriesAPI().for_date(date).call()
        except HTTPResponseError as e:
            raise ErrorMapper.from_response(e)
        result = DeliveriesMapper.from_response(response)
        self._deliveries_cache[date] = result
        return result

    def get_pendent_payments(self, date: str) -> list[PendentOrder]:
        if date in self._payments_cache:
            observability.log(ObsEv.CACHE_HIT)
            return self._payments_cache[date]
        try:
            response = PaymentsPendentAPI().for_date(date).call()
        except HTTPResponseError as e:
            raise ErrorMapper.from_response(e)
        result = PaymentsMapper.from_response(response)
        self._payments_cache[date] = result
        return result

    def _clear_cache(self) -> None:
        self._deliveries_cache.clear()
        self._payments_cache.clear()
