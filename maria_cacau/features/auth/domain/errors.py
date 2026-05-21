from maria_cacau.core.error import ErrorModel


class NoCachedCredentialsError(ErrorModel):
    def __init__(self) -> None:
        super().__init__(
            code="AUTH001",
            user_message="Credenciais não configuradas.",
            dev_message="Nenhuma credencial salva em cache.",
        )
