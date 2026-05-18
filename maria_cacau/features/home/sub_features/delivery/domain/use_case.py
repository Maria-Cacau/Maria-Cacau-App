from concurrent.futures import ThreadPoolExecutor

from ..data import OrdersRepository
from .models import DeliveryModel


class DeliveryUseCase:
    def __init__(self) -> None:
        self.repository = OrdersRepository()

    def get_orders(self, date: str) -> DeliveryModel:
        with ThreadPoolExecutor(max_workers=2) as executor:
            future_deliveries = executor.submit(self.repository.get_deliveries, date)
            future_payments = executor.submit(self.repository.get_pendent_payments, date)

        return DeliveryModel(
            deliveries=future_deliveries.result(),
            pendent_orders=future_payments.result(),
        )
