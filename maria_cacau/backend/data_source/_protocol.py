from typing import Protocol, runtime_checkable


@runtime_checkable
class DataSourceProtocol(Protocol):
    """Contrato agnóstico de fonte de dados para pedidos."""

    def is_ready(self) -> bool:
        """Retorna True se credentials e sheet estão configurados em memória."""
        ...

    def set_credentials(self, credentials: dict) -> None:
        """Autentica com o dict da service account e guarda o client em memória."""
        ...

    def clear_credentials(self) -> None:
        """Remove o client autenticado da memória. Mantém o sheet_id."""
        ...

    def set_sheet(self, sheet_id: str) -> None:
        """Define a planilha ativa e dispara prewarm em background."""
        ...

    def fetch_orders_by_date(self, date: str) -> list[dict]:
        """Retorna pedidos da data informada (DD/MM/YYYY)."""
        ...

    def fetch_orders_by_period(self, start: str, end: str) -> list[dict]:
        """Retorna pedidos no intervalo de datas informado (DD/MM/YYYY)."""
        ...
