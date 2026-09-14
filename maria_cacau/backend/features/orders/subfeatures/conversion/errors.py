"""Motivos pelos quais um pedido não pode ser enviado para a Meta — todos `422`: o pedido existe,
mas o estado dele na planilha impede o envio."""

from .....errors import BackendError


class ConversionError(BackendError):
    http_status = 422

    def __init__(self) -> None:
        super().__init__(self.dev_message)


class OrderIgnoredError(ConversionError):
    code         = "CV01"
    user_message = "Pedido marcado para não enviar."
    dev_message  = "Meta Status is Ignorado."


class NoContactError(ConversionError):
    code         = "CV02"
    user_message = "Pedido sem telefone e sem e-mail — não é possível enviar."
    dev_message  = "Order has neither phone nor e-mail."


class NoPaymentDateError(ConversionError):
    code         = "CV03"
    user_message = "Pedido sem data de 1º pagamento válida — não é possível calcular a data do evento."
    dev_message  = "First payment date is empty or malformed."


class OutsideWindowError(ConversionError):
    code         = "CV04"
    user_message = "Fora do prazo da Meta — mais de 7 dias desde o pagamento."
    dev_message  = "First payment date is older than the 7-day acceptance window."


class ZeroTotalError(ConversionError):
    code         = "CV05"
    user_message = "Valor total zerado — pedido provavelmente cancelado."
    dev_message  = "Order total is zero or negative."
