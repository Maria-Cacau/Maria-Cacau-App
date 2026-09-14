"""Pré-validação de um pedido: decide se ele pode ir para a Meta, e por quê não, quando não pode.

Roda no `GET /conversions/pending/<pedido>`, e de novo no `POST` antes de falar com a Meta — entre
a busca e o clique, outra pessoa pode ter enviado o pedido ou marcado `Ignorado`.
"""

from datetime import datetime
from zoneinfo import ZoneInfo

from ...data_source import PaymentCols, SheetCols
from ...utils import (normalize_decimal, split_city_state, state_from_zip,
                      to_datetime)
from .models import (BlockReason, ConversionStatus, FieldStatus, PendingOrder,
                     SheetStatus, WarnReason)

_TZ = ZoneInfo("America/Sao_Paulo")
_WINDOW_DAYS = 7

_MESSAGES: dict[BlockReason | WarnReason, str] = {
    BlockReason.NOT_FOUND:       "Pedido não encontrado na planilha.",
    BlockReason.ALREADY_SENT:    "Já enviado para a Meta.",
    BlockReason.IGNORED:         "Marcado para não enviar.",
    BlockReason.NO_CONTACT:      "Sem telefone e sem e-mail — não é possível enviar.",
    BlockReason.NO_PAYMENT_DATE: "Sem data de 1º pagamento — não é possível calcular a data do evento.",
    BlockReason.OUTSIDE_WINDOW:  "Fora do prazo da Meta — mais de 7 dias desde o pagamento.",
    BlockReason.ZERO_TOTAL:      "Valor total zerado — pedido provavelmente cancelado.",
    WarnReason.PREVIOUSLY_DENIED: "A Meta recusou este pedido antes; pode tentar de novo.",
    WarnReason.PARTIAL_FIELDS:    "Dados incompletos — a Meta terá menos chance de reconhecer o cliente.",
}


def _blocked(number: str, reason: BlockReason, **extra) -> PendingOrder:
    return PendingOrder(
        status=ConversionStatus.BLOCKED, number=number, reason=reason,
        message=_MESSAGES[reason], **extra,
    )


def _build_fields(order: dict[str, str]) -> list[FieldStatus]:
    phone = order.get(SheetCols.CUSTOMER_PHONE, "").strip()
    email = order.get(SheetCols.CUSTOMER_EMAIL, "").strip()

    full_name = order.get(SheetCols.CUSTOMER_NAME, "").strip()
    has_last_name = len(full_name.split()) >= 2

    zip_code = order.get(SheetCols.ADDRESS_ZIP, "").strip()
    raw_city = order.get(SheetCols.ADDRESS_CITY, "").strip()
    city, state = split_city_state(raw_city)
    if not state:
        state = state_from_zip("".join(c for c in zip_code if c.isdigit()))
    has_city_state = bool(city) and bool(state)

    return [
        FieldStatus("phone",      bool(phone), phone or None),
        FieldStatus("email",      bool(email), email or None),
        FieldStatus("name",       has_last_name, full_name or None),
        FieldStatus("zip",        bool(zip_code), zip_code or None),
        FieldStatus("city_state", has_city_state, raw_city or None),
    ]


def prevalidate(order: dict[str, str] | None, number: str, *, now: datetime | None = None) -> PendingOrder:
    """Decide se `order` pode ser enviado. `order` é o dict devolvido pelo data source, ou
    `None` quando o número não foi encontrado."""
    if order is None:
        return _blocked(number, BlockReason.NOT_FOUND)

    now = now or datetime.now(_TZ)
    fields = _build_fields(order)

    customer_name = order.get(SheetCols.CUSTOMER_NAME, "").strip() or None
    total_raw     = order.get(SheetCols.TOTAL, "") or "0"
    total         = float(normalize_decimal(total_raw) or "0")
    payment_raw   = order.get(PaymentCols.DATE.slot(1), "").strip()
    sheet_status  = order.get(SheetCols.META_STATUS, "").strip()
    sent_at       = order.get(SheetCols.META_SENT, "").strip() or None

    common = dict(customer_name=customer_name, total=total, payment_date=payment_raw or None, fields=fields)

    if sheet_status == SheetStatus.ENVIADO.value:
        return _blocked(number, BlockReason.ALREADY_SENT, sent_at=sent_at, **common)

    if sheet_status == SheetStatus.IGNORADO.value:
        return _blocked(number, BlockReason.IGNORED, **common)

    phone_present = fields[0].present
    email_present = fields[1].present
    if not phone_present and not email_present:
        return _blocked(number, BlockReason.NO_CONTACT, **common)

    if not payment_raw:
        return _blocked(number, BlockReason.NO_PAYMENT_DATE, **common)

    try:
        payment_day = to_datetime(payment_raw).date()
    except ValueError:
        return _blocked(number, BlockReason.NO_PAYMENT_DATE, **common)

    if (now.date() - payment_day).days > _WINDOW_DAYS:
        return _blocked(number, BlockReason.OUTSIDE_WINDOW, **common)

    if total <= 0:
        return _blocked(number, BlockReason.ZERO_TOTAL, **common)

    if sheet_status == SheetStatus.NEGADO.value:
        return PendingOrder(
            status=ConversionStatus.WARNING, number=number, reason=WarnReason.PREVIOUSLY_DENIED,
            message=_MESSAGES[WarnReason.PREVIOUSLY_DENIED], **common,
        )

    missing = [f for f in fields if not f.present]
    
    if missing:
        return PendingOrder(
            status=ConversionStatus.WARNING, number=number, reason=WarnReason.PARTIAL_FIELDS,
            message=_MESSAGES[WarnReason.PARTIAL_FIELDS], **common,
        )

    return PendingOrder(status=ConversionStatus.READY, number=number, **common)
