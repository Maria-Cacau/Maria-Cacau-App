"""Models utilizados no módulo de envio de conversão para a Meta."""

from dataclasses import dataclass
from datetime import date, datetime
from enum import Enum, auto

META_STATUS_SENT = "Enviado"

# A Meta recusa eventos com mais de 7 dias — mesma janela que o backend aplica no envio.
WINDOW_DAYS = 7


class ConversionState(Enum):
    HANDLED        = auto()  # `Meta Status` preenchido: já foi tratado
    OUTSIDE_WINDOW = auto()  # pagamento há mais de 7 dias: a Meta não aceita
    MISSING_DATA   = auto()  # sem telefone e sem e-mail, ou sem data de pagamento: o envio vai falhar
    READY          = auto()


@dataclass
class ConversionOrderModel:
    number:             str
    customer_name:      str
    customer_phone:     str | None
    customer_email:     str | None
    total:              float
    first_payment_date: str | None
    zip_code:           str | None
    city:               str | None
    meta_status:        str | None
    meta_sent_at:       str | None

    @property
    def has_last_name(self) -> bool:
        return len(self.customer_name.split()) >= 2

    def state(self, today: date) -> ConversionState:
        if self.meta_status is not None:
            return ConversionState.HANDLED

        payment_day = self._payment_day()
        if payment_day and (today - payment_day).days > WINDOW_DAYS:
            return ConversionState.OUTSIDE_WINDOW

        if payment_day is None or not (self.customer_phone or self.customer_email):
            return ConversionState.MISSING_DATA

        return ConversionState.READY

    def _payment_day(self) -> date | None:
        for fmt in ("%d/%m/%Y", "%d/%m/%y"):
            try:
                return datetime.strptime(self.first_payment_date or "", fmt).date()
            except ValueError:
                continue
        return None
