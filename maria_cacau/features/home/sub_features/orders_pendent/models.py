"""Models utilizados no módulo"""

from dataclasses import dataclass

from pandas.core.series import Series


@dataclass
class OrdersModel():
    report: str
    chartData: Series


@dataclass
class DeliveryModel():
    deliveries: str
    deliveries_count: Series

    @property
    def deliveries_sum(self) -> int:
        return sum(self.deliveries_count)