"""Envio de um pedido para a Meta: revalida, envia e grava o resultado na planilha."""

from datetime import datetime

from .....data_source import SheetCols
from .....utils import TIMEZONE, DateFormat
from .errors import MetaRejectedError
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
            self._meta.send_event(build_event(order))
        except MetaRejectedError:
            self._repo.mark(number, SheetStatus.NEGADO)
            raise

        # Só grava depois da resposta da Meta — gravar antes marcaria como enviado algo que não foi.
        status = SheetStatus.TESTE if self._meta.is_test_mode() else SheetStatus.ENVIADO
        self._repo.mark(number, status, datetime.now(TIMEZONE).strftime(DateFormat.BR_FULL))
