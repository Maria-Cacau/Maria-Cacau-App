"""Área de validação de CPF: interface gráfica e lógica de verificação."""

from PyQt6.QtCore import Qt
from PyQt6.QtWidgets import QHBoxLayout, QVBoxLayout

from maria_cacau.assets import strings
from maria_cacau.core.observability import AppEvent, observability
from maria_cacau.design_system.aux_widgets import AuxWidgets


def _is_valid_cpf(cpf: str) -> bool:
    digits = []
    for c in cpf:
        if '0' <= c <= '9':
            digits.append(ord(c) - 48)

    if len(digits) != 11:
        return False

    if digits.count(digits[0]) == 11:
        return False

    s = 0
    for i in range(9):
        s += digits[i] * (10 - i)
    r = s % 11
    if (0 if r < 2 else 11 - r) != digits[9]:
        return False

    s = 0
    for i in range(10):
        s += digits[i] * (11 - i)
    r = s % 11
    return (0 if r < 2 else 11 - r) == digits[10]


class GuiValiCpf(AuxWidgets):
    _COLOR_VALID   = '#388e3c'
    _COLOR_INVALID = '#C62828'

    def __init__(self) -> None:
        super().__init__()
        self.root = self.group_box("Validação CPF")
        self.setup_ui()

    def setup_ui(self) -> None:
        layout = QVBoxLayout(self.root)

        inputLayout = QHBoxLayout()
        inputLayout.addWidget(self.lbl("CPF", 11))

        self.txt = self.line_edit(11, readonly_=False)
        self.txt.returnPressed.connect(self._on_verificar)
        inputLayout.addWidget(self.txt)

        self.but = self.bts(strings.BTN_VERIFICAR)
        self.but.clicked.connect(self._on_verificar)
        inputLayout.addWidget(self.but)

        layout.addLayout(inputLayout)

        self.lblResp = self.lbl(strings.LBL_CPF_INSTRUCAO, 11)
        self.lblResp.setAlignment(Qt.AlignmentFlag.AlignCenter)
        layout.addWidget(self.lblResp)

    def _on_verificar(self) -> None:
        cpf = self.txt.text()
        if not cpf.strip():
            return

        valid = _is_valid_cpf(cpf)
        observability.log(AppEvent.CPF_CHECK, valid=valid)

        if valid:
            self.lblResp.setText("CPF válido")
            self.lblResp.setStyleSheet(f"color: {self._COLOR_VALID}; font-weight: bold;")
        else:
            self.lblResp.setText("CPF inválido")
            self.lblResp.setStyleSheet(f"color: {self._COLOR_INVALID}; font-weight: bold;")
