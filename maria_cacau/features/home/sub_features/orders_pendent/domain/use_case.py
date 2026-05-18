from concurrent.futures import ThreadPoolExecutor

from ..data import OrdersRepository
from .models import OrdersModel


class OrdersUseCase:
    def __init__(self) -> None:
        self.repository = OrdersRepository()

    def get_orders(self, date: str) -> OrdersModel:
        with ThreadPoolExecutor(max_workers=2) as executor:
            future_deliveries = executor.submit(self.repository.get_deliveries, date)
            future_payments = executor.submit(self.repository.get_pendent_payments, date)

        return OrdersModel(
            deliveries=future_deliveries.result(),
            pendent_orders=future_payments.result(),
        )
