"""View da feature Auth: menu Segurança com ações de certificado."""

from PyQt6.QtCore import pyqtSignal
from PyQt6.QtGui import QAction
from PyQt6.QtWidgets import QMenu

from maria_cacau.assets import strings


class AuthView(QMenu):
    configure_triggered = pyqtSignal()
    clear_triggered     = pyqtSignal()

    def __init__(self) -> None:
        super().__init__(strings.MNU_SEGURANCA)
        self._setup_actions()

    @property
    def view_title(self) -> str:
        return strings.MNU_SEGURANCA

    def _setup_actions(self) -> None:
        act_configurar = QAction(strings.ACT_CONFIGURAR_CERT, self)
        act_configurar.setMenuRole(QAction.MenuRole.NoRole)
        self.addAction(act_configurar)
        act_configurar.triggered.connect(self.configure_triggered)

        act_limpar = QAction(strings.ACT_LIMPAR_CERT, self)
        act_limpar.setMenuRole(QAction.MenuRole.NoRole)
        self.addAction(act_limpar)
        act_limpar.triggered.connect(self.clear_triggered)
