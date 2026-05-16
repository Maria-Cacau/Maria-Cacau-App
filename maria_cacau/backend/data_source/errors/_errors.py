class DataSourceError(Exception):
    code:         str
    user_message: str
    dev_message:  str


class CredentialsFileNotFoundError(DataSourceError):
    code         = "DS01"
    user_message = "Arquivo de credenciais não encontrado."
    dev_message  = "Credentials file not found at the configured path."

    def __init__(self, path: str) -> None:
        super().__init__(self.dev_message)
        self.path = path


class CredentialsSaveError(DataSourceError):
    code         = "DS02"
    user_message = "Erro ao salvar as credenciais."
    dev_message  = "Failed to save credentials to local storage."

    def __init__(self) -> None:
        super().__init__(self.dev_message)


class CredentialsFileCorruptedError(DataSourceError):
    code         = "DS03"
    user_message = "Arquivo de credenciais inválido."
    dev_message  = "Credentials file is corrupted (invalid JSON)."

    def __init__(self) -> None:
        super().__init__(self.dev_message)


class CredentialsFormatError(DataSourceError):
    code         = "DS04"
    user_message = "Formato das credenciais inválido."
    dev_message  = "Credentials file is missing required fields."

    def __init__(self) -> None:
        super().__init__(self.dev_message)


class InvalidCredentialsError(DataSourceError):
    code         = "DS05"
    user_message = "Credenciais inválidas ou recusadas pelo Google."
    dev_message  = "Credentials are invalid or rejected by Google."

    def __init__(self) -> None:
        super().__init__(self.dev_message)


class NetworkUnavailableError(DataSourceError):
    code         = "DS06"
    user_message = "Sem conexão com a internet."
    dev_message  = "Network is unavailable."

    def __init__(self) -> None:
        super().__init__(self.dev_message)


class NetworkTimeoutError(DataSourceError):
    code         = "DS07"
    user_message = "A conexão demorou demais. Tente novamente."
    dev_message  = "Network request timed out."

    def __init__(self) -> None:
        super().__init__(self.dev_message)


class TokenExpiredError(DataSourceError):
    code         = "DS08"
    user_message = "Sessão expirada. Reconecte as credenciais."
    dev_message  = "Google OAuth token has expired."

    def __init__(self) -> None:
        super().__init__(self.dev_message)


class SheetIdInvalidError(DataSourceError):
    code         = "DS09"
    user_message = "ID da planilha inválido."
    dev_message  = "Sheet ID is empty or blank."

    def __init__(self, sheet_id: str) -> None:
        super().__init__(self.dev_message)
        self.sheet_id = sheet_id


class SheetNotFoundError(DataSourceError):
    code         = "DS10"
    user_message = "Planilha não encontrada."
    dev_message  = "Spreadsheet not found."

    def __init__(self) -> None:
        super().__init__(self.dev_message)


class SheetAccessDeniedError(DataSourceError):
    code         = "DS11"
    user_message = "Sem permissão para acessar a planilha."
    dev_message  = "Access to the spreadsheet was denied."

    def __init__(self) -> None:
        super().__init__(self.dev_message)


class InvalidDateFormatError(DataSourceError):
    code         = "DS12"
    user_message = "Formato de data inválido. Use DD/MM/AAAA."
    dev_message  = "Invalid date format. Expected DD/MM/YYYY."

    def __init__(self, value: str) -> None:
        super().__init__(self.dev_message)
        self.value = value


class InvalidDateRangeError(DataSourceError):
    code         = "DS13"
    user_message = "Período inválido: a data final é anterior à inicial."
    dev_message  = "Invalid date range: end is before start."

    def __init__(self, start: str, end: str) -> None:
        super().__init__(self.dev_message)
        self.start = start
        self.end   = end


class ApiQuotaExceededError(DataSourceError):
    code         = "DS14"
    user_message = "Limite de requisições atingido. Tente em alguns minutos."
    dev_message  = "Google Sheets API quota exceeded."

    def __init__(self) -> None:
        super().__init__(self.dev_message)


class ApiUnexpectedResponseError(DataSourceError):
    code         = "DS15"
    user_message = "Resposta inesperada da API."
    dev_message  = "Unexpected API response."

    def __init__(self, cause: Exception) -> None:
        super().__init__(f"{self.dev_message}: {cause}")
        self.cause = cause


class UnexpectedSheetStructureError(DataSourceError):
    code         = "DS16"
    user_message = "Estrutura da planilha incompatível."
    dev_message  = "Row column count does not match expected schema."

    def __init__(self, expected: int, got: int) -> None:
        super().__init__(self.dev_message)
        self.expected = expected
        self.got      = got


class PrewarmFailedError(DataSourceError):
    code         = "DS17"
    user_message = "Erro ao inicializar a conexão com a planilha."
    dev_message  = "Prewarm failed."

    def __init__(self, cause: Exception) -> None:
        super().__init__(f"{self.dev_message}: {cause}")
        self.cause = cause


class DataSourceNotReadyError(DataSourceError):
    code         = "DS18"
    user_message = "Planilha não configurada."
    dev_message  = "Data source is not ready (no credentials or sheet configured)."

    def __init__(self) -> None:
        super().__init__(self.dev_message)
