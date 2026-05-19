"""View da feature Funcionalidades: menu com acesso às ferramentas auxiliares."""

from PyQt6.QtCore import pyqtSignal
from PyQt6.QtGui import QAction
from PyQt6.QtWidgets import QMenu

from maria_cacau.assets import strings


class FuncionalidadesView(QMenu):
    cpf_triggered = pyqtSignal()

    def __init__(self) -> None:
        super().__init__(strings.MNU_FUNCIONALIDADES)
        self._setup_actions()

    @property
    def view_title(self) -> str:
        return strings.MNU_FUNCIONALIDADES

    def _setup_actions(self) -> None:
        act_cpf = QAction(strings.ACT_VALIDAR_CPF, self)
        act_cpf.setMenuRole(QAction.MenuRole.NoRole)
        self.addAction(act_cpf)
        act_cpf.triggered.connect(self.cpf_triggered)
