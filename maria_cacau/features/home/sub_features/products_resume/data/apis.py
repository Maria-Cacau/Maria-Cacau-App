"""Definição do endpoint do backend consumido pela feature Products Resume."""

from maria_cacau.core.network.api import API


class OrdersSummaryAPI(API):
    @property
    def path(self) -> str:
        return "/orders"

    def for_period(self, start: str, end: str) -> "OrdersSummaryAPI":
        self.parameters.params = {"start": start, "end": end}
        return self
