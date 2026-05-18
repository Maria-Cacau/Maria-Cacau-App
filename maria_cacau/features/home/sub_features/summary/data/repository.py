"""Repository da feature Summary: chama a API e converte erros HTTP em ErrorModel."""

from maria_cacau.core.network import HTTPResponseError

from ..domain.models import OrderDetail
from .apis import OrdersSummaryAPI
from .mapper import ErrorMapper, OrdersSummaryMapper


class SummaryRepository:
    def get_by_period(self, start: str, end: str) -> list[OrderDetail]:
        """Busca pedidos do período; converte HTTPResponseError em ErrorModel antes de relançar."""
        try:
            response = OrdersSummaryAPI().for_period(start, end).call()
        except HTTPResponseError as e:
            raise ErrorMapper.from_response(e)
        return OrdersSummaryMapper.from_response(response)
