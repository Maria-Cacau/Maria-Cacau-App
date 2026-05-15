class DataSourceError(Exception):
    pass


class CredentialsFileNotFoundError(DataSourceError):
    def __init__(self, path: str) -> None:
        super().__init__(f"Credentials file not found: {path}")
        self.path = path


class CredentialsSaveError(DataSourceError):
    def __init__(self) -> None:
        super().__init__("Failed to save credentials to local storage.")


class CredentialsFileCorruptedError(DataSourceError):
    def __init__(self) -> None:
        super().__init__("Credentials file is corrupted (invalid JSON).")


class CredentialsFormatError(DataSourceError):
    def __init__(self) -> None:
        super().__init__("Credentials file is missing required fields.")


class InvalidCredentialsError(DataSourceError):
    def __init__(self) -> None:
        super().__init__("Credentials are invalid or rejected by Google.")


class NetworkUnavailableError(DataSourceError):
    def __init__(self) -> None:
        super().__init__("Network is unavailable.")


class NetworkTimeoutError(DataSourceError):
    def __init__(self) -> None:
        super().__init__("Network request timed out.")


class TokenExpiredError(DataSourceError):
    def __init__(self) -> None:
        super().__init__("Google OAuth token has expired.")


class SheetIdInvalidError(DataSourceError):
    def __init__(self, sheet_id: str) -> None:
        super().__init__(f"Invalid sheet ID: '{sheet_id}'.")
        self.sheet_id = sheet_id


class SheetNotFoundError(DataSourceError):
    def __init__(self) -> None:
        super().__init__("Spreadsheet not found.")


class SheetAccessDeniedError(DataSourceError):
    def __init__(self) -> None:
        super().__init__("Access to the spreadsheet was denied.")


class InvalidDateFormatError(DataSourceError):
    def __init__(self, value: str) -> None:
        super().__init__(f"Invalid date format: '{value}'. Expected DD/MM/YYYY.")
        self.value = value


class InvalidDateRangeError(DataSourceError):
    def __init__(self, start: str, end: str) -> None:
        super().__init__(f"Invalid date range: end '{end}' is before start '{start}'.")
        self.start = start
        self.end = end


class ApiQuotaExceededError(DataSourceError):
    def __init__(self) -> None:
        super().__init__("Google Sheets API quota exceeded.")


class ApiUnexpectedResponseError(DataSourceError):
    def __init__(self, cause: Exception) -> None:
        super().__init__(f"Unexpected API response: {cause}")
        self.cause = cause


class UnexpectedSheetStructureError(DataSourceError):
    def __init__(self, expected: int, got: int) -> None:
        super().__init__(f"Row has {got} columns, expected {expected}.")
        self.expected = expected
        self.got = got


class PrewarmFailedError(DataSourceError):
    def __init__(self, cause: Exception) -> None:
        super().__init__(f"Prewarm failed: {cause}")
        self.cause = cause


class DataSourceNotReadyError(DataSourceError):
    def __init__(self) -> None:
        super().__init__("Data source is not ready (no credentials or sheet configured).")
