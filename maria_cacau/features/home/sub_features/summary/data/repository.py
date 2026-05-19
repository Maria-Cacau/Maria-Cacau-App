"""Repository da feature Summary: chama a API e converte erros HTTP em ErrorModel."""

from maria_cacau.core.bus import bus
from maria_cacau.core.network import HTTPResponseError
from maria_cacau.core.observability import observability
from maria_cacau.core.services import Services

from ..domain.events import FeatureEvents as ObsEv
from ..domain.models import OrderDetail
from .apis import OrdersSummaryAPI
from .mapper import ErrorMapper, OrdersSummaryMapper


class SummaryRepository:
    def __init__(self) -> None:
        self._cache: dict[tuple[str, str], list[OrderDetail]] = {}
        bus.cache_cleared.connect(self._clear_cache)

    def get_by_period(self, start: str, end: str) -> list[OrderDetail]:
        key = (start, end)
        if key in self._cache:
            observability.log(ObsEv.CACHE_HIT)
            return self._cache[key]
        bus.request_started.emit(Services.SUMMARY)
        try:
            response = OrdersSummaryAPI().for_period(start, end).call()
        except HTTPResponseError as e:
            raise ErrorMapper.from_response(e)
        finally:
            bus.request_finished.emit(Services.SUMMARY)
        result = OrdersSummaryMapper.from_response(response)
        self._cache[key] = result
        return result

    def _clear_cache(self) -> None:
        self._cache.clear()
