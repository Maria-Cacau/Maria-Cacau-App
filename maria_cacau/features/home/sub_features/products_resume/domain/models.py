"""Models utilizados no módulo de resumo de produtos."""

from dataclasses import dataclass, field


@dataclass
class ProductCount:
    name: str
    quantity: int


@dataclass
class OrderDetail:
    number: str
    phone: str
    delivery_type: str
    delivery_date: str
    products: list[ProductCount] = field(default_factory=list)


@dataclass
class DaySummary:
    date: str
    orders: list[OrderDetail]
    products: list[ProductCount]


@dataclass
class ProductsResumeSummary:
    start: str
    end: str
    total_orders: int
    products: list[ProductCount]
    days: list[DaySummary]


@dataclass
class ProductsViewData:
    report: str
    chart_data: dict[str, int]
