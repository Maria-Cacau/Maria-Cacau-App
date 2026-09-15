from maria_cacau.core.error import ErrorModel


class NoCachedCredentialsError(ErrorModel):
    def __init__(self) -> None:
        super().__init__(
            code="AUTH001",
            user_message="Credenciais não configuradas.",
            dev_message="Nenhuma credencial salva em cache.",
        )


class InvalidMetaCredentialsError(ErrorModel):
    def __init__(self) -> None:
        super().__init__(
            code="AUTH002",
            user_message="Dados inválidos. Confirme se o arquivo está correto e tente novamente.",
            dev_message="Bloco maria_cacau.meta presente, mas sem access_token ou dataset_id preenchidos.",
        )
