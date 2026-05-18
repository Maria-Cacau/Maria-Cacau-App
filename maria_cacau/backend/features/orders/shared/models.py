from dataclasses import dataclass, field


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
    subtotal:       float
    total:          float
    discount:       float             = 0.0
    shipping:       float             = 0.0
    amount_pendent: float             = 0.0
    pay_on_pickup:  bool              = False
    payments:       list[PaymentItem] = field(default_factory=list)


@dataclass
class Delivery:
    date:          str
    type:          str
    receiver_name: str
    address:       Address | None = None
    factory_notes: str     | None = None
    motoboy_info:  str     | None = None


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
