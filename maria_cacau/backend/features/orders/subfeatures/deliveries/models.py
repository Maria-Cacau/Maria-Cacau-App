"""Models de domínio da feature de entregas."""

from dataclasses import dataclass


@dataclass
class DeliveryTypeCount:
    type:  str
    count: int


@dataclass
class DeliveriesSummary:
    unique:     int
    total:      int
    deliveries: list[DeliveryTypeCount]
