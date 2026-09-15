"""Envio de um pedido para a Meta: revalida, envia e grava o resultado na planilha."""

from datetime import datetime

from ......core.observability import observability
from .....data_source import SheetCols
from .....utils import TIMEZONE, DateFormat
from .errors import MetaRejectedError
from .events import ConversionEvent
from .meta import MetaRepository, build_event
from .models import SheetStatus
from .repository import ConversionRepository
from .validation import validate


class ConversionService:
    def __init__(self) -> None:
        self._repo = ConversionRepository()
        self._meta = MetaRepository()

    def send(self, number: str) -> None:
        # Antes da planilha: sem credencial, não vale gastar a leitura.
        self._meta.ensure_configured()
        order = self._repo.get_by_number(number)

        # PUT idempotente: repetir o envio de um pedido já enviado é sucesso, sem falar com a Meta.
        if order.get(SheetCols.META_STATUS, "").strip() == SheetStatus.ENVIADO:
            return

        validate(order)

        try:
            response = self._meta.send_event(build_event(order))
        except MetaRejectedError:
            self._repo.mark(number, SheetStatus.NEGADO)
            raise

        test_mode = self._meta.is_test_mode()
        # Registrado antes de gravar na planilha: se a escrita falhar, o comprovante de que a Meta
        # recebeu (e o fbtrace_id, que o suporte da Meta usa para rastrear o evento) não se perde.
        observability.log(
            ConversionEvent.META_CONVERSION_SENT,
            order=number,
            events_received=response.get("events_received"),
            fbtrace_id=response.get("fbtrace_id") or "",
            test_mode=test_mode,
        )

        # Só grava depois da resposta da Meta — gravar antes marcaria como enviado algo que não foi.
        status = SheetStatus.TESTE if test_mode else SheetStatus.ENVIADO
        self._repo.mark(number, status, datetime.now(TIMEZONE).strftime(DateFormat.BR_FULL))
