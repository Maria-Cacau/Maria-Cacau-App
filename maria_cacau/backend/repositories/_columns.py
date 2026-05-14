"""Mapeamento das colunas da aba Cadastro da planilha."""

from enum import StrEnum


class Col(StrEnum):
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
    LABEL_THEME = "etiqueta / tema"
    BOX_NAME    = "nome na caixa"
    BOX_ART     = "arte / tecido da caixa"

    # Financeiro
    DISCOUNT       = "desconto"
    SHIPPING       = "$frete"
    TOTAL          = "total"
    AMOUNT_PENDENT = "quanto\nfalta\npagar?"
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


class ProductCol(StrEnum):
    """Colunas dos slots de produto (1–7). Usar com .slot(n)."""

    NAME  = "prod{}"
    QTY   = "q{}"
    PRICE = "$unit{}"
    TOTAL = "valor{}"

    def slot(self, n: int) -> str:
        return self.value.format(n)


class PaymentCol(StrEnum):
    """Colunas das parcelas de pagamento (1–6). Usar com .slot(n)."""

    DATE      = "data {}ºpgto"
    AMOUNT    = "valor {}ºpgto"
    TYPE      = "forma {}ºpgto"
    CONFIRMED = "confirmado {}ºpgto"

    def slot(self, n: int) -> str:
        return self.value.format(n)
