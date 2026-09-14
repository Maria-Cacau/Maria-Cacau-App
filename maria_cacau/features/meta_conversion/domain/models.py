"""Models utilizados no módulo de envio de conversão para a Meta."""

from dataclasses import dataclass, field

META_STATUS_SENT = "Enviado"


@dataclass
class ProductItemModel:
    name:     str
    quantity: int


@dataclass
class ConversionOrderModel:
    number:             str
    customer_name:      str
    customer_phone:     str | None
    customer_email:     str | None
    total:              float
    first_payment_date: str | None
    delivery_date:      str
    delivery_type:      str
    zip_code:           str | None
    city:               str | None
    meta_status:        str | None
    meta_sent_at:       str | None
    products:           list[ProductItemModel] = field(default_factory=list)

    @property
    def can_send(self) -> bool:
        """Qualquer valor em `Meta Status` significa que o pedido já foi tratado."""
        return self.meta_status is None
