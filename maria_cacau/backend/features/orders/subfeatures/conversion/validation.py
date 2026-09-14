"""Regras que impedem um pedido de ir para a Meta. Roda imediatamente antes do envio — entre a
busca na tela e o clique, alguém pode ter mexido no pedido."""

from datetime import datetime

from .....data_source import PaymentCols, SheetCols
from .....utils import TIMEZONE, normalize_decimal, to_datetime
from .errors import (NoContactError, NoPaymentDateError, OrderIgnoredError,
                     OutsideWindowError, ZeroTotalError)
from .models import SheetStatus

_WINDOW_DAYS = 7


def validate(order: dict[str, str], *, now: datetime | None = None) -> None:
    """Levanta o erro da primeira regra que barrar o envio. Pedido já enviado não passa por
    aqui — é tratado antes, como sucesso."""
    if order.get(SheetCols.META_STATUS, "").strip() == SheetStatus.IGNORADO:
        raise OrderIgnoredError()

    if not order.get(SheetCols.CUSTOMER_PHONE, "").strip() and not order.get(SheetCols.CUSTOMER_EMAIL, "").strip():
        raise NoContactError()

    try:
        payment_day = to_datetime(order.get(PaymentCols.DATE.slot(1), "").strip()).date()
    except ValueError:
        raise NoPaymentDateError()

    now = now or datetime.now(TIMEZONE)
    if (now.date() - payment_day).days > _WINDOW_DAYS:
        raise OutsideWindowError()

    try:
        total = float(normalize_decimal(order.get(SheetCols.TOTAL, "") or "0"))
    except ValueError:
        total = 0.0
    if total <= 0:
        raise ZeroTotalError()
