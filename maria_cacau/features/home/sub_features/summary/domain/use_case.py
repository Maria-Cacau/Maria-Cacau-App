"""Caso de uso: agrega pedidos do período em resumo de produtos por dia e global."""

from collections import defaultdict

from ..data.repository import SummaryRepository
from .models import DaySummary, OrderDetail, ProductCount, ProductsSummary


class SummaryUseCase:
    def __init__(self) -> None:
        self._repo = SummaryRepository()

    def get_summary(self, start: str, end: str) -> ProductsSummary:
        orders = self._repo.get_by_period(start, end)
        return self._build_summary(orders, start, end)

    def _build_summary(
        self, orders: list[OrderDetail], start: str, end: str
    ) -> ProductsSummary:
        by_day: dict[str, list[OrderDetail]] = defaultdict(list)
        for order in orders:
            by_day[order.delivery_date].append(order)

        global_totals: dict[str, int] = defaultdict(int)
        days: list[DaySummary] = []

        for date in sorted(by_day):
            day_orders = by_day[date]
            day_totals: dict[str, int] = defaultdict(int)

            for order in day_orders:
                for product in order.products:
                    day_totals[product.name] += product.quantity
                    global_totals[product.name] += product.quantity

            days.append(DaySummary(
                date=date,
                orders=day_orders,
                products=_to_sorted_counts(day_totals),
            ))

        return ProductsSummary(
            start=start,
            end=end,
            total_orders=len(orders),
            products=_to_sorted_counts(global_totals),
            days=days,
        )


def _to_sorted_counts(totals: dict[str, int]) -> list[ProductCount]:
    return sorted(
        [ProductCount(name=name, quantity=qty) for name, qty in totals.items()],
        key=lambda p: p.name,
    )
