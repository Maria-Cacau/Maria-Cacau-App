"""Regra de negócios das entregas"""

from concurrent.futures import ThreadPoolExecutor

from maria_cacau.core.error import ErrorModel

from ..domain.models import OrdersModel, OrdersViewData
from ..domain.signals import signals
from ..domain.use_case import OrdersUseCase


class OrdersViewModel():
    def __init__(self) -> None:
        self.use_case = OrdersUseCase()
        self.executor = ThreadPoolExecutor(max_workers=1)

    def on_generate(self, date: str) -> None:
        self.executor.submit(lambda: self._fetch(date))

    def _fetch(self, date: str):
        try:
            result = self.use_case.get_orders(date)
            report = self._build_report(result, date)
            signals.report_generated.emit(report)
        except ErrorModel as e:
            signals.error.emit(e)

    def _build_view_data(self, model: OrdersModel, date: str) -> OrdersViewData:
        return OrdersViewData(
            report=self._build_report(model, date),
            chart_data={d.type: d.count for d in model.deliveries.deliveries},
        )

    def _build_report(self, model: OrdersModel, date: str) -> str:
        deliveries_lines = "\n".join(
            f"{d.type} = {d.count}" for d in model.deliveries.deliveries
        )
        report = f"Para o dia {date} temos: {model.deliveries.total} pedido(s)\n{deliveries_lines}\n\n"

        if not model.pendent_orders:
            report += "Sem nenhuma pendência!"
        else:
            pendent_lines = "\n".join(
                f"{o.number} -> {o.name} | {o.delivery_type} | {o.phone} | $: {o.amount_pendent}"
                for o in model.pendent_orders
            )
            report += f"Falta(m) pagar:\n{pendent_lines}"

        return report
