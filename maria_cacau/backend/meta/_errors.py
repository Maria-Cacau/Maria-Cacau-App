from ..errors import BackendError


class MetaError(BackendError):
    def __init__(self, detail: str = "") -> None:
        super().__init__(f"{self.dev_message} {detail}".strip())
        if detail:
            self.dev_message = f"{self.dev_message} {detail}"


class MetaNotConfiguredError(MetaError):
    code         = "MT01"
    user_message = "Credenciais da Meta não configuradas."
    dev_message  = "Meta access token/dataset id not set."
    http_status  = 503


class MetaUnavailableError(MetaError):
    code         = "MT02"
    user_message = "Não foi possível falar com a Meta. Tente novamente em instantes."
    dev_message  = "Graph API unreachable, timed out or returned an invalid body:"
    http_status  = 502

    def __init__(self, cause: Exception) -> None:
        super().__init__(str(cause))


class MetaAuthError(MetaError):
    code         = "MT03"
    user_message = "Credenciais da Meta inválidas ou expiradas."
    dev_message  = "Graph API rejected the access token:"
    http_status  = 401


class MetaRejectedError(MetaError):
    code         = "MT04"
    user_message = "A Meta recusou o envio deste pedido."
    dev_message  = "Graph API rejected the event:"
    http_status  = 502

    def __init__(self, status_code: int, detail: str) -> None:
        super().__init__(f"[{status_code}] {detail}")
