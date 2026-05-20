"""ViewModel da feature Summary: executa o UseCase em background e emite resultados via signals."""

from concurrent.futures import ThreadPoolExecutor

from maria_cacau.core.error import ErrorModel, unexpected_error

from ..domain.models import ProductCount, ProductsSummary, ProductsViewData
from ..domain.signals import signals
from ..domain.use_case import SummaryUseCase

_DIVIDER = "\n\n" + "-" * 55


class SummaryViewModel:
    def __init__(self) -> None:
        self.use_case = SummaryUseCase()
        self.executor = ThreadPoolExecutor(max_workers=1)

    def on_generate(self, start: str, end: str) -> None:
        self.executor.submit(lambda: self._fetch(start, end))

    def _fetch(self, start: str, end: str) -> None:
        try:
            result = self.use_case.get_summary(start, end)
            summary = self._build_view_data(result)
            signals.report_generated.emit(summary)
        except ErrorModel as e:
            signals.error.emit(e)
        except Exception as e:
            signals.error.emit(unexpected_error(e))

    def _build_view_data(self, summary: ProductsSummary) -> ProductsViewData:
        return ProductsViewData(
            report=self._build_report(summary),
            chart_data={p.name: p.quantity for p in summary.products},
        )

    def _build_report(self, summary: ProductsSummary) -> str:
        header = (
            f"Entre {summary.start} e {summary.end} há {summary.total_orders} pedido(s)\n"
            + _products_lines(summary.products)
        )

        day_totals_section = ""
        order_details_section = ""

        for day in summary.days:
            day_header = f"\n\n\n>> Dia {day.date} - {len(day.orders)} pedido(s)"
            day_totals_section += day_header + "\n" + _products_lines(day.products)

            order_details_section += day_header
            for order in day.orders:
                order_details_section += (
                    f"\n\nPedido: {order.number} | {order.delivery_type} | {order.phone}\n"
                    + _products_lines(order.products)
                )

        return header + _DIVIDER + day_totals_section + _DIVIDER + order_details_section


def _products_lines(products: list[ProductCount]) -> str:
    return "".join(f"{p.quantity:>4} -> {p.name}\n" for p in products)
