"""Service de autenticação — gerencia o estado de conexão do DataSource."""

from ...data_source import data_source


class AuthService:
    def connect(self, credentials: dict, sheet_id: str | None) -> None:
        data_source.set_credentials(credentials)
        if sheet_id is not None:
            data_source.set_sheet(sheet_id)

    def disconnect(self) -> None:
        data_source.clear_credentials()
