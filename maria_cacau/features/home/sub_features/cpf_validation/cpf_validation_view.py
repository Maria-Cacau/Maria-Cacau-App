"""Área de validação de CPF: interface gráfica e lógica de verificação."""

from PyQt6.QtCore import Qt
from PyQt6.QtWidgets import QHBoxLayout, QVBoxLayout

from maria_cacau.assets import strings
from maria_cacau.design_system.aux_widgets import AuxWidgets


class GuiValiCpf(AuxWidgets):
    ## Construtor: define a super classe e também o grupo
    def __init__(self) -> None:
        super(GuiValiCpf, self).__init__()

        self.root = self.group_box("Validação CPF")                                     # Cria o Group Box
        self.root.setEnabled(False)                                                     # v5.0: Deixa inativo

        self.setup_ui()

    ## Método: cria e configura a janela
    def setup_ui(self) -> None:
        layout = QVBoxLayout(self.root)

        inputLayout = QHBoxLayout()
        inputLayout.addWidget(self.lbl("CPF", 11))
        self.txt = self.line_edit(11, readonly_=False)
        inputLayout.addWidget(self.txt)
        self.but = self.bts("Verificar")
        inputLayout.addWidget(self.but)
        layout.addLayout(inputLayout)

        self.lblResp = self.lbl(strings.LBL_CPF_INSTRUCAO, 11)
        self.lblResp.setAlignment(Qt.AlignmentFlag.AlignCenter)
        layout.addWidget(self.lblResp)
