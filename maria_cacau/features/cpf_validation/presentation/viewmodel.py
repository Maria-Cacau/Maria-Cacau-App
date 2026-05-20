"""ViewModel da feature CPF Validation: executa o UseCase e emite resultado via signal."""

from ..domain.signals import signals
from ..domain.use_case import CpfValidationUseCase


class CpfValidationViewModel:
    def __init__(self) -> None:
        self.use_case = CpfValidationUseCase()

    def on_validate(self, cpf: str) -> None:
        result = self.use_case.validate(cpf)
        signals.result.emit(result)
