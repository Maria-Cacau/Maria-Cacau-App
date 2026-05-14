"""Regra de negócios das entregas"""

from concurrent.futures import ThreadPoolExecutor

from .use_case import OrdersUseCase
from .signals import signals


class OrdersViewModel():
    def __init__(self) -> None:
        self.use_case = OrdersUseCase()
        self.executor = ThreadPoolExecutor(max_workers=1)
    
    def on_generate(self, date: str) -> None:
        # self.bridge.done.connect(self._on_done)
        self.executor.submit(lambda: self._fetch(date))

    def _fetch(self, date: str):
        result = self.use_case.get_orders(date)
        signals.report_generated.emit(result)  