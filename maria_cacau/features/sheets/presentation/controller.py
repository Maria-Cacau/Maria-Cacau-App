from PyQt6.QtWidgets import QDialog, QInputDialog, QMessageBox

from maria_cacau.assets import strings
from maria_cacau.core.bus import bus
from maria_cacau.core.error import ErrorModel
from maria_cacau.core.observability import observability
from maria_cacau.design_system.gui_popup import GuiPopup

from ..domain.events import FeatureEvents as ObsEv
from ..domain.models import SheetModel
from ..domain.signals import signals
from .view import SheetCreateView, SheetsMenuView
from .viewmodel import SheetsViewModel


class SheetsController:
    def __init__(self) -> None:
        self.view      = SheetsMenuView()
        self.viewmodel = SheetsViewModel()
        self._popup    = GuiPopup()
        self._setup_actions()
        self._load_saved_sheets()

    def _setup_actions(self) -> None:
        self.view.connect_triggered.connect(self._on_connect)
        self.view.sheet_selected.connect(self._on_select)
        self.view.cache_clear_triggered.connect(self._on_clear_cache)
        bus.sheet_connected.connect(self._on_connected)
        bus.sheet_selected.connect(self._on_selected)
        bus.sheet_renamed.connect(self._on_renamed)
        signals.error.connect(self._on_error)

    def _load_saved_sheets(self) -> None:
        for sheet in self.viewmodel.load_all():
            self.view.add_or_update_sheet(sheet.name, sheet.sheet_id)

    def _on_connect(self) -> None:
        dialog = SheetCreateView()
        if dialog.exec() != QDialog.DialogCode.Accepted:
            return

        link = dialog.link
        name = dialog.name

        model = self.viewmodel.find_by_link(link)
        if model:
            return self._update_sheet_name_if_needed(model)

        self.viewmodel.connect(link, name)

    def _update_sheet_name_if_needed(self, model: SheetModel) -> None:
        new_name = self._show_existing_dialog(model)
        if new_name is None:
            return
        self.viewmodel.update_name(model.sheet_id, new_name)

    def _show_existing_dialog(self, model: SheetModel) -> str | None:
        msg     = strings.DLG_PLANILHA_EXISTENTE_MSG.format(nome=model.name)
        confirm = QMessageBox.question(
            None,
            strings.DLG_PLANILHA_EXISTENTE_TITULO,
            msg,
            QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.No,
        )

        if confirm != QMessageBox.StandardButton.Yes:
            return
    
        new_name, ok = QInputDialog.getText(
            None, strings.DLG_RENOMEAR_TITULO, strings.DLG_RENOMEAR_MSG
        )

        if not ok or not new_name.strip():
            return
        
        return new_name.strip()

    def _on_clear_cache(self) -> None:
        bus.cache_cleared.emit()
        observability.log(ObsEv.CACHE_CLEAR)

    def _on_select(self, sheet_id: str) -> None:
        self.viewmodel.select(sheet_id)

    def _on_renamed(self, sheet: SheetModel) -> None:
        self.view.add_or_update_sheet(sheet.name, sheet.sheet_id)
        observability.log(ObsEv.SHEET_RENAMED)

    def _on_connected(self, sheet: SheetModel) -> None:
        self.view.add_or_update_sheet(sheet.name, sheet.sheet_id)
        self.view.set_active(sheet.sheet_id)
        observability.log(ObsEv.SHEET_CONNECTED)

    def _on_selected(self, sheet: SheetModel) -> None:
        self.view.set_active(sheet.sheet_id)
        observability.log(ObsEv.SHEET_SELECTED)

    def _on_error(self, error: ErrorModel) -> None:
        self._popup.show(error.to_popup())
        observability.log(ObsEv.SHEET_ERROR)

