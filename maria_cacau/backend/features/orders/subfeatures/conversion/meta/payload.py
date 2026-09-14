"""Monta o evento `Purchase` a partir do dict do pedido devolvido pelo data source."""

from datetime import datetime
from datetime import time as _time

from ......data_source import PaymentCols, SheetCols
from ......utils import TIMEZONE, normalize_decimal, to_datetime
from .normalizer import build_user_data


def event_id_from_order_number(number: str) -> str:
    """`26512,1` → `26512-1`. Só troca o separador — truncar o decimal destruiria a unicidade
    entre `26512,0` e `26512,1`, que são pedidos diferentes."""
    return number.strip().replace(",", "-")


def event_time_from_payment_date(date_str: str, *, now: datetime | None = None) -> int:
    """`min(23:59:59 do dia do 1º pagamento, agora)`, em `America/Sao_Paulo`.

    A `Data 1ªPgto` não tem hora — usar 23:59:59 dá a margem máxima até o limite de 7 dias da
    Meta, e o `min` com `agora` garante que a data nunca cai no futuro quando o pagamento foi
    hoje.
    """
    payment_day = to_datetime(date_str).date()
    end_of_day = datetime.combine(payment_day, _time(23, 59, 59), tzinfo=TIMEZONE)
    now = now or datetime.now(TIMEZONE)
    return int(min(end_of_day, now).timestamp())


def build_event(order: dict[str, str]) -> dict:
    """Monta o evento `Purchase` completo, pronto para a Graph API."""
    total = normalize_decimal(order.get(SheetCols.TOTAL, "0") or "0")
    payment_date = order[PaymentCols.DATE.slot(1)]

    return {
        "event_name": "Purchase",
        "event_id": event_id_from_order_number(order[SheetCols.ORDER]),
        "event_time": event_time_from_payment_date(payment_date),
        "action_source": "website",
        "user_data": build_user_data(order),
        "custom_data": {"currency": "BRL", "value": float(total)},
    }
