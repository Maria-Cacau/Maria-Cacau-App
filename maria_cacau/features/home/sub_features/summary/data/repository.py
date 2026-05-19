"""Repository da feature Summary: chama a API e converte erros HTTP em ErrorModel."""

from maria_cacau.core.bus import bus
from maria_cacau.core.network import HTTPResponseError
from maria_cacau.core.services import Services

from ..domain.models import OrderDetail
from .apis import OrdersSummaryAPI
from .mapper import ErrorMapper, OrdersSummaryMapper


class SummaryRepository:
    def get_by_period(self, start: str, end: str) -> list[OrderDetail]:
        bus.request_started.emit(Services.SUMMARY)
        try:
            response = OrdersSummaryAPI().for_period(start, end).call()
        except HTTPResponseError as e:
            raise ErrorMapper.from_response(e)
        finally:
            bus.request_finished.emit(Services.SUMMARY)
        return OrdersSummaryMapper.from_response(response)
