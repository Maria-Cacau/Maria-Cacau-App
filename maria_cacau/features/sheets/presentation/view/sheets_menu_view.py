from PyQt6.QtCore import pyqtSignal
from PyQt6.QtGui import QAction
from PyQt6.QtWidgets import QMenu

from maria_cacau.assets import strings


class SheetsMenuView(QMenu):
    connect_triggered      = pyqtSignal()
    sheet_selected         = pyqtSignal(str)   # sheet_id
    sheet_remove_requested = pyqtSignal(str, str)  # sheet_id, name
    cache_clear_triggered  = pyqtSignal()

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

        self._menus:          dict[str, QMenu]   = {}
        self._select_actions: dict[str, QAction] = {}
        self._separators:     dict[str, QAction] = {}

    def _setup_layout(self) -> None:
        self.addMenu(self._submenu)
        self.addAction(self._act_conectar)

    def add_or_update_sheet(self, name: str, sheet_id: str) -> None:
        if sheet_id in self._menus:
            self._menus[sheet_id].setTitle(name)
            return

        submenu = QMenu(name, self._submenu)

        submenu.menuAction().setCheckable(True)

        act_select = QAction(strings.ACT_SELECIONAR_PLANILHA, submenu)
        act_select.setMenuRole(QAction.MenuRole.NoRole)
        act_select.triggered.connect(lambda _, sid=sheet_id: self.sheet_selected.emit(sid))

        act_remove = QAction(strings.ACT_REMOVER_PLANILHA, submenu)
        act_remove.setMenuRole(QAction.MenuRole.NoRole)
        act_remove.triggered.connect(
            lambda _, sid=sheet_id, m=submenu: self.sheet_remove_requested.emit(sid, m.title())
        )

        submenu.addAction(act_select)
        separator = submenu.addSeparator()
        submenu.addAction(act_remove)

        self._submenu.addMenu(submenu)
        self._menus[sheet_id]          = submenu
        self._select_actions[sheet_id] = act_select
        self._separators[sheet_id]     = separator

    def set_active(self, sheet_id: str) -> None:
        for sid, menu in self._menus.items():
            is_active = sid == sheet_id
            menu.menuAction().setChecked(is_active)
            self._select_actions[sid].setVisible(not is_active)
            self._separators[sid].setVisible(not is_active)

    def remove_sheet(self, sheet_id: str) -> None:
        if sheet_id not in self._menus:
            return
        self._submenu.removeAction(self._menus[sheet_id].menuAction())
        del self._menus[sheet_id]
        del self._select_actions[sheet_id]
        del self._separators[sheet_id]
