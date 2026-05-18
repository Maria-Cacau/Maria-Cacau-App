"""Mapeamento de uma linha do DataFrame para o model Order."""

from pandas import Series

from ....data_source import (PAYMENT_SLOTS, PRODUCT_SLOTS, PaymentCols,
                             ProductCols, SheetCols)
from .models import (Address, Customer, Customization, Delivery, Event,
                     Financial, Order, PaymentItem, ProductItem, Receiver)


class OrderMapper:
    """Converte uma linha do DataFrame (vinda do SheetsRepository) em um Order."""

    @staticmethod
    def to_model(row: Series) -> Order:
        """Monta um Order completo a partir de uma linha do DataFrame."""
        products = OrderMapper._products(row)
        return Order(
            number=str(row.get(SheetCols.ORDER, "")),
            customer=OrderMapper._customer(row),
            receiver=OrderMapper._receiver(row),
            products=products,
            financial=OrderMapper._financial(row, products),
            delivery=OrderMapper._delivery(row),
            source=str(row.get(SheetCols.SOURCE, "")),
            tiny_code=int(row[SheetCols.TINY]) if row.get(SheetCols.TINY) else None,
            customization=OrderMapper._customization(row),
            products_note=str(row.get(SheetCols.PRODUCTS_NOTE, "")) or None,
        )

    @staticmethod
    def _customer(row: Series) -> Customer:
        return Customer(
            name=str(row.get(SheetCols.CUSTOMER_NAME, "")),
            relationship=str(row.get(SheetCols.CUSTOMER_RELATIONSHIP, "")),
            phone=str(row.get(SheetCols.CUSTOMER_PHONE, "")),
            cpf=str(row.get(SheetCols.CUSTOMER_CPF, "")),
            email=str(row.get(SheetCols.CUSTOMER_EMAIL, "")) or None,
        )

    @staticmethod
    def _receiver(row: Series) -> Receiver:
        event_type = str(row.get(SheetCols.EVENT_TYPE, ""))
        event_date = str(row.get(SheetCols.EVENT_DATE, ""))
        event = Event(type=event_type, date=event_date) if event_type and event_type != "-" else None
        return Receiver(
            name=str(row.get(SheetCols.RECEIVER_NAME, "")),
            gender=str(row.get(SheetCols.RECEIVER_GENDER, "")),
            event=event,
        )

    @staticmethod
    def _customization(row: Series) -> Customization:
        return Customization(
            label_name=str(row.get(SheetCols.LABEL_NAME, "")),
            label_theme=str(row.get(SheetCols.LABEL_THEME, "")),
            box_name=str(row.get(SheetCols.BOX_NAME, "")),
            box_art=str(row.get(SheetCols.BOX_ART, "")),
        )

    @staticmethod
    def _products(row: Series) -> list[ProductItem]:
        products = []
        for i in range(1, PRODUCT_SLOTS + 1):
            name = str(row.get(ProductCols.NAME.slot(i), "")).strip()
            if not name or name == "-":
                continue
            products.append(ProductItem(
                name=name,
                quantity=int(row.get(ProductCols.QTY.slot(i), 0) or 0),
                price=float(row.get(ProductCols.PRICE.slot(i), 0.0) or 0.0),
                total=float(row.get(ProductCols.TOTAL.slot(i), 0.0) or 0.0),
            ))
        return products

    @staticmethod
    def _payments(row: Series) -> list[PaymentItem]:
        payments = []
        for i in range(1, PAYMENT_SLOTS + 1):
            amount = float(row.get(PaymentCols.AMOUNT.slot(i), 0.0) or 0.0)
            if amount <= 0:
                continue
            confirmed_raw = str(row.get(PaymentCols.CONFIRMED.slot(i), "")).upper()
            payments.append(PaymentItem(
                installment=i,
                date=str(row.get(PaymentCols.DATE.slot(i), "")),
                amount=amount,
                type=str(row.get(PaymentCols.TYPE.slot(i), "")),
                confirmed=confirmed_raw in ("TRUE", "VERDADEIRO", "1"),
            ))
        return payments

    @staticmethod
    def _financial(row: Series, products: list[ProductItem]) -> Financial:
        return Financial(
            subtotal=sum(p.total for p in products),
            total=float(row.get(SheetCols.TOTAL, 0.0) or 0.0),
            discount=float(row.get(SheetCols.DISCOUNT, 0.0) or 0.0),
            shipping=float(row.get(SheetCols.SHIPPING, 0.0) or 0.0),
            amount_pendent=float(row.get(SheetCols.AMOUNT_PENDENT, 0.0) or 0.0),
            pay_on_pickup=bool(row.get(SheetCols.PAY_ON_PICKUP, 0)),
            payments=OrderMapper._payments(row),
        )

    @staticmethod
    def _delivery(row: Series) -> Delivery:
        street   = str(row.get(SheetCols.ADDRESS_STREET, ""))
        zip_code = str(row.get(SheetCols.ADDRESS_ZIP, ""))
        address  = Address(
            zip=zip_code,
            street=street,
            complement=str(row.get(SheetCols.ADDRESS_COMPLEMENT, "")) or None,
            neighborhood=str(row.get(SheetCols.ADDRESS_NEIGHBORHOOD, "")),
            city=str(row.get(SheetCols.ADDRESS_CITY, "")),
        ) if street or zip_code else None

        return Delivery(
            date=str(row.get(SheetCols.DELIVERY_DATE, "")),
            type=str(row.get(SheetCols.DELIVERY_TYPE, "")),
            receiver_name=str(row.get(SheetCols.DELIVERY_RECEIVER_NAME, "")),
            address=address,
            factory_notes=str(row.get(SheetCols.FACTORY_NOTES, "")) or None,
            motoboy_info=str(row.get(SheetCols.MOTOBOY_INFO, "")) or None,
        )
