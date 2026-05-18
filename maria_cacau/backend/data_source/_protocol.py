from typing import Protocol, runtime_checkable


@runtime_checkable
class DataSourceProtocol(Protocol):
    """Contrato agnóstico de fonte de dados para pedidos."""

    def is_ready(self) -> bool:
        """Retorna True se credentials e sheet estão configurados em memória."""
        ...

    def set_credentials(self, raw_json: str) -> None:
        """Autentica com o JSON bruto da service account e guarda o client em memória."""
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
