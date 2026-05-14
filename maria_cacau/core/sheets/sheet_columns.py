"""Colunas usadas da planilha"""

from enum import Enum

class SheetColumns(Enum):
    DELIVERY_TYPE = "modalidade"
    PAYMENT_PENDENT = "quanto\nfalta\npagar?"
    ORDER = "pedido"
    RECIPIENT = "destinatário"
    PHONE = "tel"


class SheetData(Enum):
    DELIVERY_FABRIC = "FABRICA"