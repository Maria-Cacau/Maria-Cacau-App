"""Modelos de domínio do pedido, disponíveis para qualquer feature do backend."""

from dataclasses import dataclass


@dataclass
class Address:
    zip:          str
    street:       str        = ""
    number:       str        = ""
    complement:   str | None = None
    neighborhood: str        = ""
    city:         str        = ""
    state:        str        = ""
    latitude:     float | None = None
    longitude:    float | None = None


@dataclass
class Event:
    type: str
    date: str


@dataclass
class Customer:
    name:         str
    relationship: str        = ""
    phone:        str        = ""
    cpf:          str        = ""
    email:        str | None = None


@dataclass
class Receiver:
    name:   str
    gender: str          = ""
    event:  Event | None = None


@dataclass
class Customization:
    label_name:  str = ""
    label_theme: str = ""
    box_name:    str = ""
    box_art:     str = ""


@dataclass
class ProductItem:
    name:     str
    quantity: int
    price:    float
    total:    float


@dataclass
class PaymentItem:
    installment: int
    date:        str
    amount:      float
    type:        str
    confirmed:   bool


@dataclass
class Financial:
    """Só `total` é obrigatório. Os demais campos ficam `None` quando não calculados — nunca um
    zero ou lista vazia fingindo que o valor é conhecido."""

    total:          float
    subtotal:       float             | None = None
    discount:       float             | None = None
    shipping:       float             | None = None
    amount_pendent: float             | None = None
    pay_on_pickup:  bool              | None = None
    payments:       list[PaymentItem] | None = None


@dataclass
class Delivery:
    date:          str
    type:          str
    receiver_name: str
    address:       Address | None = None
    factory_notes: str     | None = None
    motoboy_info:  str     | None = None


@dataclass
class Meta:
    """Estado do pedido nas colunas `Meta Status`/`Meta Dt Envio` da planilha, sem interpretação
    de regra de negócio — quem decide se o pedido pode ser enviado é a subfeature de conversão."""

    status:  str | None = None
    sent_at: str | None = None


@dataclass
class Order:
    number:        str
    customer:      Customer
    receiver:      Receiver
    products:      list[ProductItem]
    financial:     Financial
    delivery:      Delivery
    status:        str           = "active"
    source:        str           = ""
    tiny_code:     int           | None = None
    customization: Customization | None = None
    products_note: str           | None = None
    meta:          Meta          | None = None
