######    Gui Reis   -   guisreis25@gmail.com    ######    COPYRIGHT © 2020 KINGS

# -*- coding: utf-8 -*-

## Classe responsável pela criação da área de Validação do CPF

#    Aqui é onde é feito a construção da Interface Gráfica da área e
# também o calculo para a vaidação do CPF.


from PyQt6.QtCore import Qt
from PyQt6.QtWidgets import QWidget

from maria_cacau.assets import strings
## Bibliotecas necessárias:
from maria_cacau.design_system.aux_widgets import AuxWidgets


class Gui_ValiCpf(AuxWidgets):
    ## Construtor: define a super classe e também o grupo
    def __init__(self) -> None:
        super(Gui_ValiCpf, self).__init__()

        self.root = self.gBox("Validação CPF")                                              # Cria o Group Box
        self.root.setEnabled(False)                                                         # v5.0: Deixa inativo

        self.gui_Ui()

    ## Destruidor: desaloca os atributos declarados
    def __del__(self) -> None:
        del self.root
        del self.txt, self.but, self.lblResp

    ## Método: cria e configura a janela
    def gui_Ui(self) -> None:
        from PyQt6.QtWidgets import QHBoxLayout, QVBoxLayout
        layout = QVBoxLayout(self.root)

        inputLayout = QHBoxLayout()
        inputLayout.addWidget(self.lbl("CPF", 11))
        self.txt = self.lineEdit(11, readonly_=False)
        inputLayout.addWidget(self.txt)
        self.but = self.bts("Verificar")
        inputLayout.addWidget(self.but)
        layout.addLayout(inputLayout)

        self.lblResp = self.lbl(strings.LBL_CPF_INSTRUCAO, 11)
        self.lblResp.setAlignment(Qt.AlignmentFlag.AlignCenter)
        layout.addWidget(self.lblResp)
