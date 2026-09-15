"""Repository da feature Meta Conversion: chama as APIs e converte erros HTTP em ErrorModel."""

from maria_cacau.core.bus import bus
from maria_cacau.core.network import API, HTTPResponse, HTTPResponseError
from maria_cacau.core.services import Services
from maria_cacau.features._shared import ErrorMapper

from ..domain.models import ConversionOrderModel
from .apis import ConversionAPI, OrderAPI
from .mapper import OrderMapper


class MetaConversionRepository:
    def get_order(self, number: str) -> ConversionOrderModel:
        return OrderMapper.from_response(self._call(OrderAPI(number)))

    def send(self, number: str) -> None:
        self._call(ConversionAPI(number))

    @staticmethod
    def _call(api: API) -> HTTPResponse:
        bus.request_started.emit(Services.META_CONVERSION)
        try:
            return api.call()
        except HTTPResponseError as e:
            raise ErrorMapper.from_response(e)
        finally:
            bus.request_finished.emit(Services.META_CONVERSION)
