"""Erros do envio de conversão.

`CV*` — o pedido existe, mas o estado dele na planilha impede o envio (todos `422`).
`MT*` — problema com a credencial ou com a própria Meta.
"""

from .....errors import BackendError


class ConversionError(BackendError):
    def __init__(self, detail: str = "") -> None:
        if detail:
            self.dev_message = f"{self.dev_message} {detail}"
        super().__init__(self.dev_message)


class OrderIgnoredError(ConversionError):
    code         = "CV01"
    user_message = "Pedido marcado para não enviar."
    dev_message  = "Meta Status is Ignorado."
    http_status  = 422


class NoContactError(ConversionError):
    code         = "CV02"
    user_message = "Pedido sem telefone e sem e-mail — não é possível enviar."
    dev_message  = "Order has neither phone nor e-mail."
    http_status  = 422


class NoPaymentDateError(ConversionError):
    code         = "CV03"
    user_message = "Pedido sem data de 1º pagamento válida — não é possível calcular a data do evento."
    dev_message  = "First payment date is empty or malformed."
    http_status  = 422


class OutsideWindowError(ConversionError):
    code         = "CV04"
    user_message = "Fora do prazo da Meta — mais de 7 dias desde o pagamento."
    dev_message  = "First payment date is older than the 7-day acceptance window."
    http_status  = 422


class ZeroTotalError(ConversionError):
    code         = "CV05"
    user_message = "Valor total zerado — pedido provavelmente cancelado."
    dev_message  = "Order total is zero or negative."
    http_status  = 422


class MetaNotConfiguredError(ConversionError):
    code         = "MT01"
    user_message = "Credenciais da Meta não configuradas."
    dev_message  = "Meta access token or dataset id not found in storage."
    http_status  = 503


class MetaUnavailableError(ConversionError):
    code         = "MT02"
    user_message = "Não foi possível falar com a Meta. Tente novamente em instantes."
    dev_message  = "Graph API unreachable, timed out or returned an invalid body:"
    http_status  = 502


class MetaAuthError(ConversionError):
    code         = "MT03"
    user_message = "Credenciais da Meta inválidas ou expiradas."
    dev_message  = "Graph API rejected the access token:"
    http_status  = 401


class MetaRejectedError(ConversionError):
    code         = "MT04"
    user_message = "A Meta recusou o envio deste pedido."
    dev_message  = "Graph API rejected the event:"
    http_status  = 502
