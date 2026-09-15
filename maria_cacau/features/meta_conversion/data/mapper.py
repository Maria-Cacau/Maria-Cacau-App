"""Mapper de HTTPResponse para o domain model da feature."""

from maria_cacau.core.network import HTTPResponse

from ..domain.models import ConversionOrderModel


class OrderMapper:
    @staticmethod
    def from_response(response: HTTPResponse) -> ConversionOrderModel:
        order     = response.json()
        customer  = order["customer"]
        financial = order["financial"]
        address   = order["delivery"].get("address") or {}
        payments  = financial.get("payments") or []
        meta      = order.get("meta") or {}

        return ConversionOrderModel(
            number=order["number"],
            customer_name=customer["name"],
            customer_phone=customer.get("phone") or None,
            customer_email=customer.get("email") or None,
            total=financial["total"],
            first_payment_date=payments[0]["date"] if payments else None,
            zip_code=address.get("zip") or None,
            city=address.get("city") or None,
            meta_status=meta.get("status"),
            meta_sent_at=meta.get("sent_at"),
        )
