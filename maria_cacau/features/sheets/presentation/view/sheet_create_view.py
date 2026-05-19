from PyQt6.QtWidgets import QDialog, QDialogButtonBox, QFormLayout, QLineEdit, QVBoxLayout

from maria_cacau.assets import strings


class SheetCreateView(QDialog):
    def __init__(self, parent=None) -> None:
        super().__init__(parent)
        self.setWindowTitle(strings.DLG_CONECTAR_TITULO)
        self._link_input = QLineEdit()
        self._name_input = QLineEdit()
        self._setup_ui()

    @property
    def link(self) -> str:
        return self._link_input.text().strip()

    @property
    def name(self) -> str:
        return self._name_input.text().strip()

    def _setup_ui(self) -> None:
        self._link_input.setPlaceholderText(strings.DLG_CONECTAR_PLACEHOLDER_LINK)
        self._name_input.setPlaceholderText(strings.DLG_CONECTAR_PLACEHOLDER_NOME)

        form = QFormLayout()
        form.addRow(strings.DLG_CONECTAR_LBL_LINK, self._link_input)
        form.addRow(strings.DLG_CONECTAR_LBL_NOME, self._name_input)

        buttons = QDialogButtonBox(
            QDialogButtonBox.StandardButton.Ok | QDialogButtonBox.StandardButton.Cancel
        )
        buttons.accepted.connect(self.accept)
        buttons.rejected.connect(self.reject)

        layout = QVBoxLayout()
        layout.addLayout(form)
        layout.addWidget(buttons)
        self.setLayout(layout)
