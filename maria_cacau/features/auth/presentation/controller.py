"""Controller da feature Auth: conecta signals da view ao ViewModel e atualiza status bar."""

from PyQt6.QtWidgets import QFileDialog, QMessageBox

from maria_cacau.assets import strings
from maria_cacau.core.bus import bus
from maria_cacau.core.error import ErrorModel
from maria_cacau.core.observability import observability
from maria_cacau.design_system.gui_popup import GuiPopup

from ..domain.events import FeatureEvents as ObsEv
from ..domain.signals import signals
from .view import AuthView
from .viewmodel import AuthViewModel


class AuthController:
    def __init__(self) -> None:
        self.view      = AuthView()
        self.viewmodel = AuthViewModel()
        self._popup    = GuiPopup()
        self._setup_actions()

    def _setup_actions(self) -> None:
        self.view.configure_triggered.connect(self._on_configure)
        self.view.clear_triggered.connect(self._on_clear)

        bus.credentials_configured.connect(self._on_configured)
        bus.credentials_cleared.connect(self._on_cleared)
        signals.error.connect(self._on_error)

    def _on_configure(self) -> None:
        path, _ = QFileDialog.getOpenFileName(
            None, strings.DLG_CERT_TITULO, "", strings.DLG_CERT_FILTRO
        )
        if path:
            self.viewmodel.configure(path)

    def _on_clear(self) -> None:
        confirm = QMessageBox.question(
            None,
            strings.DLG_LIMPAR_CERT_TITULO,
            strings.DLG_LIMPAR_CERT_MSG,
            QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.No,
        )
        if confirm == QMessageBox.StandardButton.Yes:
            self.viewmodel.clear()

    def _on_configured(self) -> None:
        observability.log(ObsEv.CERT_SET)

    def _on_cleared(self) -> None:
        observability.log(ObsEv.CERT_CLEAR)

    def _on_error(self, error: ErrorModel) -> None:
        self._popup.show(error.to_popup())
        observability.log(ObsEv.CERT_ERROR)
