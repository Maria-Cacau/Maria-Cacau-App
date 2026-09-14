"""Caso de uso: buscar um pedido e enviá-lo como conversão para a Meta."""

from maria_cacau.core.error import ErrorModel

from ..data import MetaConversionRepository
from .models import ConversionOrderModel

# Falhas passageiras (Meta fora do ar, escrita na planilha) — reenviar é seguro, a Meta deduplica
# pelo id do evento. Nas demais, repetir o mesmo pedido falharia de novo.
_RETRYABLE_ERRORS = frozenset({"MT02", "DS20"})


def can_retry(error: ErrorModel) -> bool:
    return error.code in _RETRYABLE_ERRORS


class MetaConversionUseCase:
    def __init__(self) -> None:
        self.repository = MetaConversionRepository()

    def get_order(self, number: str) -> ConversionOrderModel:
        return self.repository.get_order(number)

    def send(self, number: str) -> None:
        self.repository.send(number)
