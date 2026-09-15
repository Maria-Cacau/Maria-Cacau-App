"""Caso de uso: buscar um pedido e enviá-lo como conversão para a Meta."""

from ..data import MetaConversionRepository
from .models import ConversionOrderModel


class MetaConversionUseCase:
    def __init__(self) -> None:
        self.repository = MetaConversionRepository()

    def get_order(self, number: str) -> ConversionOrderModel:
        return self.repository.get_order(number)

    def send(self, number: str) -> None:
        self.repository.send(number)
