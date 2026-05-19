class AppSession:
    def __init__(self) -> None:
        self.has_credentials_cached: bool = False
        self.has_sheet_cached: bool       = False
        self.is_authenticated: bool       = False
        self.active_sheet_id: str | None  = None


session = AppSession()
