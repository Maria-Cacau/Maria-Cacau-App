"""Models utilizados no módulo"""

from dataclasses import dataclass


@dataclass
class DeliveryCount:
    type: str
    count: int


@dataclass
class DeliveriesSummary:
    unique: int
    total: int
    deliveries: list[DeliveryCount]


@dataclass
class PendentOrder:
    number: str
    name: str
    phone: str
    delivery_type: str
    amount_pendent: float


@dataclass
class OrdersModel:
    deliveries: DeliveriesSummary
    pendent_orders: list[PendentOrder]
