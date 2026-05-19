from PyQt6.QtCore import pyqtSignal
from PyQt6.QtGui import QAction
from PyQt6.QtWidgets import QMenu

from maria_cacau.assets import strings


class SheetsMenuView(QMenu):
    connect_triggered     = pyqtSignal()
    sheet_selected        = pyqtSignal(str)  # emite sheet_id
    cache_clear_triggered = pyqtSignal()

    def __init__(self) -> None:
        super().__init__(strings.MNU_ARQUIVO)
        self._setup_ui()

    @property
    def view_title(self) -> str:
        return strings.MNU_ARQUIVO

    def _setup_ui(self) -> None:
        self._setup_components()
        self._setup_layout()

    def _setup_components(self) -> None:
        self._submenu      = QMenu(strings.ACT_PLANILHAS_CONECTADAS, self)

        self._act_conectar = QAction(strings.ACT_CONECTAR_PLANILHA, self)
        self._act_conectar.setMenuRole(QAction.MenuRole.NoRole)
        self._act_conectar.triggered.connect(self.connect_triggered)

        self._act_limpar   = QAction(strings.ACT_LIMPAR_CACHE, self)
        self._act_limpar.setMenuRole(QAction.MenuRole.NoRole)
        self._act_limpar.triggered.connect(self.cache_clear_triggered)

        self._actions: dict[str, QAction] = {}

    def _setup_layout(self) -> None:
        self.addMenu(self._submenu)
        self.addAction(self._act_conectar)
        self.addSeparator()
        self.addAction(self._act_limpar)

    def add_or_update_sheet(self, name: str, sheet_id: str) -> None:
        if sheet_id in self._actions:
            self._actions[sheet_id].setText(name)
            return
        
        action = QAction(name, self._submenu)
        action.setCheckable(True)
        action.setMenuRole(QAction.MenuRole.NoRole)
        self._submenu.addAction(action)
        
        self._actions[sheet_id] = action
        action.triggered.connect(lambda _, sid=sheet_id: self.sheet_selected.emit(sid))

    def set_active(self, sheet_id: str) -> None:
        for sid, action in self._actions.items():
            action.setChecked(sid == sheet_id)
