"""View da feature CPF Validation: campo de entrada e feedback visual do resultado."""

from PyQt6.QtCore import Qt, pyqtSignal
from PyQt6.QtWidgets import QHBoxLayout, QVBoxLayout, QWidget

from maria_cacau.assets import strings
from maria_cacau.design_system.aux_widgets import AuxWidgets

from ..domain.models import CpfValidationResult


class CpfValidationView(QWidget, AuxWidgets):
    validate_cpf = pyqtSignal()

    _COLOR_VALID   = '#388e3c'
    _COLOR_INVALID = '#C62828'

    def __init__(self) -> None:
        super().__init__()
        self._setup_ui()

    @property
    def view_title(self) -> str:
        return "Validação CPF"

    def _setup_ui(self) -> None:
        self._setup_components()
        self._setup_layout()

    def _setup_components(self) -> None:
        self.txt = self.line_edit(11, readonly_=False)
        self.txt.returnPressed.connect(self.validate_cpf)

        self.butVerify = self.bts(strings.BTN_VERIFICAR)
        self.butVerify.clicked.connect(self.validate_cpf)

        self.lblResult = self.lbl(strings.LBL_CPF_INSTRUCAO, 11)
        self.lblResult.setAlignment(Qt.AlignmentFlag.AlignCenter)

    def _setup_layout(self) -> None:
        self.root = self.group_box(self.view_title)
        layout = QVBoxLayout(self.root)

        inputLayout = QHBoxLayout()
        inputLayout.addWidget(self.lbl("CPF", 11))
        inputLayout.addWidget(self.txt)
        inputLayout.addWidget(self.butVerify)
        layout.addLayout(inputLayout)
        layout.addWidget(self.lblResult)

    ## MARK: - Public methods
    def get_cpf(self) -> str:
        return self.txt.text()

    def update_result(self, result: CpfValidationResult) -> None:
        if result.is_valid:
            self.lblResult.setText("CPF válido")
            self.lblResult.setStyleSheet(f"color: {self._COLOR_VALID}; font-weight: bold;")
        else:
            self.lblResult.setText("CPF inválido")
            self.lblResult.setStyleSheet(f"color: {self._COLOR_INVALID}; font-weight: bold;")
