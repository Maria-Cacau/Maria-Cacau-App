"""Mapeamento de colunas e tabs da planílha."""

from enum import StrEnum
from typing import Final

PAYMENT_SLOTS = 6
PRODUCT_SLOTS = 7


class SheetTabs(StrEnum):
    """Tabs da planilha"""

    DATABASE = "Cadastro"

class SheetCols(StrEnum):
    """Colunas fixas da aba Cadastro, agrupadas por domínio."""

    # Identificação
    ORDER  = "pedido"
    SOURCE = "como conheceu"
    TINY   = "tiny"

    # Comprador
    CUSTOMER_NAME         = "nome comprador"
    CUSTOMER_RELATIONSHIP = "parentesco"
    CUSTOMER_PHONE        = "tel"
    CUSTOMER_CPF          = "cpf"
    CUSTOMER_EMAIL        = "email"

    # Presenteado / Evento
    RECEIVER_NAME   = "nome bebe/presenteado"
    RECEIVER_GENDER = "sexo"
    EVENT_TYPE      = "evento"
    EVENT_DATE      = "data evento"

    # Personalização
    LABEL_NAME  = "nome da etiqueta"
    LABEL_THEME = "etiqueta /tema"
    BOX_NAME    = "nome na caixa"
    BOX_ART     = "arte/tecido da caixa"

    # Financeiro
    DISCOUNT       = "desconto"
    SHIPPING       = "$frete"
    TOTAL          = "total"
    AMOUNT_PENDENT = "quanto falta pagar?"
    PAY_ON_PICKUP  = "vai pagar retira"
    PRODUCTS_NOTE  = "outro espec."

    # Entrega
    DELIVERY_DATE          = "data"
    DELIVERY_TYPE          = "modalidade"
    DELIVERY_RECEIVER_NAME = "destinatário"
    ADDRESS_STREET         = "rua"
    ADDRESS_COMPLEMENT     = "compl."
    ADDRESS_NEIGHBORHOOD   = "bairro"
    ADDRESS_CITY           = "cidade"
    ADDRESS_ZIP            = "cep"
    FACTORY_NOTES          = "obs fábrica"
    MOTOBOY_INFO           = "info motoboy"

    # Meta
    META_STATUS = "meta status"
    META_SENT   = "meta dt envio"


# Nomes alternativos de coluna → nome canônico. A planilha é editada à mão e títulos já foram
# renomeados; cada variação conhecida entra aqui, sem mexer em quem consome `SheetCols`.
COLUMN_ALIASES: Final[dict[str, str]] = {
    "data postagem": SheetCols.DELIVERY_DATE,
}


# Colunas que permitem alteração (`DataSourceProtocol.update_order`)
WRITABLE_COLS: Final[frozenset[str]] = frozenset({
    SheetCols.META_STATUS,
    SheetCols.META_SENT,
})


class ProductCols(StrEnum):
    """Colunas dos slots de produto (1–7). Usar com .slot(n)."""

    NAME  = "prod{}"
    QTY   = "q{}"
    PRICE = "$unit{}"
    TOTAL = "valor{}"

    def slot(self, n: int) -> str:
        return self.value.format(n)


class PaymentCols(StrEnum):
    """Colunas das parcelas de pagamento (1–6). Usar com .slot(n)."""

    DATE      = "data {}ªpgto"
    AMOUNT    = "valor pg{}"
    TYPE      = "forma {}º pgto"
    CONFIRMED = "pagou?{} 0-não 1-sim"

    def slot(self, n: int) -> str:
        return self.value.format(n)
