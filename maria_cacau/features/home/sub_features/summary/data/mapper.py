"""Mappers de HTTPResponse para domain models."""

from maria_cacau.core.network import HTTPResponse

from ..domain.models import OrderDetail, ProductCount


class OrdersSummaryMapper:
    @staticmethod
    def from_response(response: HTTPResponse) -> list[OrderDetail]:
        data = response.json()
        return [
            OrderDetail(
                number=order["number"],
                phone=order["customer"]["phone"],
                delivery_type=order["delivery"]["type"],
                delivery_date=order["delivery"]["date"],
                products=[
                    ProductCount(name=p["name"], quantity=p["quantity"])
                    for p in order["products"]
                ],
            )
            for order in data["orders"]
        ]
