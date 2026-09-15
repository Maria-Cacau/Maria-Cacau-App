from enum import Enum


class Services(Enum):
    DELIVERY = "Entregas"
    PAYMENTS = "Pagamentos pendentes"
    SUMMARY  = "Resumo de pedidos"
    META_CONVERSION = "Conversão Meta"
