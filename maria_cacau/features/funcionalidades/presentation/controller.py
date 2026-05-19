"""Controller da feature Funcionalidades: gerencia o menu e abre as ferramentas auxiliares."""

from maria_cacau.features.cpf_validation import CpfValidationController

from .view import FuncionalidadesView


class FuncionalidadesController:
    def __init__(self) -> None:
        self._cpf = CpfValidationController()
        self.view = FuncionalidadesView()
        self._setup_actions()

    def _setup_actions(self) -> None:
        self.view.cpf_triggered.connect(self._on_cpf)

    def _on_cpf(self) -> None:
        self._cpf.view.show()
