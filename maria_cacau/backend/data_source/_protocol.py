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

    def clear_sheet(self) -> None:
        """Remove a planilha ativa da memória. Mantém as credenciais."""
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

    def fetch_order_by_number(self, number: str) -> dict | None:
        """Busca exata pelo número do pedido (vírgula, ponto ou hífen como separador decimal;
        sem separador, assume ,0). Devolve None se não encontrado."""
        ...

    def update_order(self, number: str, fields: dict[str, str]) -> None:
        """Atualiza campos de um pedido existente, identificado pelo número.

        Só aceita chaves de `WRITABLE_COLS` (`sheet_mapper.py`) — nunca altera a coluna PEDIDO,
        nunca cria linha nova. Pedido não encontrado é erro, não é um create implícito."""
        ...
