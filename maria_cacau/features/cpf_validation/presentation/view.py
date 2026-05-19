"""View da feature CPF Validation: dialog para validação de CPF."""

from PyQt6.QtCore import Qt, pyqtSignal
from PyQt6.QtWidgets import (QDialog, QFormLayout, QHBoxLayout, QLabel,
                             QLineEdit, QVBoxLayout)

from maria_cacau.assets import strings
from maria_cacau.design_system.components import DSButton
from maria_cacau.design_system.constants import DIALOG_MIN_WIDTH

from ..domain.models import CpfValidationResult


class CpfValidationView(QDialog):
    validate_cpf = pyqtSignal()

    _COLOR_VALID   = '#388e3c'
    _COLOR_INVALID = '#C62828'

    def __init__(self, parent=None) -> None:
        super().__init__(parent)
        self._setup_ui()

    def _setup_ui(self) -> None:
        self._setup_components()
        self._setup_layout()

    def _setup_components(self) -> None:
        self.setWindowTitle(strings.DLG_CPF_TITULO)
        self.setMinimumWidth(DIALOG_MIN_WIDTH)

        self._cpf_input = QLineEdit()
        self._cpf_input.setPlaceholderText("000.000.000-00")
        self._cpf_input.returnPressed.connect(self.validate_cpf)

        self._lbl_result = QLabel(strings.LBL_CPF_INSTRUCAO)
        self._lbl_result.setAlignment(Qt.AlignmentFlag.AlignCenter)

        self._btn_verify = DSButton(strings.BTN_VERIFICAR)
        self._btn_verify.clicked.connect(self.validate_cpf)

    def _setup_layout(self) -> None:
        form = QFormLayout()
        form.setFieldGrowthPolicy(QFormLayout.FieldGrowthPolicy.ExpandingFieldsGrow)
        form.addRow(strings.DLG_CPF_LBL_CPF, self._cpf_input)

        btn_layout = QHBoxLayout()
        btn_layout.addStretch()
        btn_layout.addWidget(self._btn_verify)

        layout = QVBoxLayout()
        layout.addLayout(form)
        layout.addWidget(self._lbl_result)
        layout.addLayout(btn_layout)
        self.setLayout(layout)

    ## MARK: - Public methods

    def get_cpf(self) -> str:
        return self._cpf_input.text()

    def update_result(self, result: CpfValidationResult) -> None:
        if result.is_valid:
            self._lbl_result.setText("CPF válido")
            self._lbl_result.setStyleSheet(f"color: {self._COLOR_VALID}; font-weight: bold;")
        else:
            self._lbl_result.setText("CPF inválido")
            self._lbl_result.setStyleSheet(f"color: {self._COLOR_INVALID}; font-weight: bold;")
