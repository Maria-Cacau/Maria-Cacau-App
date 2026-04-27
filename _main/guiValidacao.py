######    Gui Reis   -   guisreis25@gmail.com    ######    COPYRIGHT © 2020 KINGS

# -*- coding: utf-8 -*-

## Classe responsável pela criação da área de Validação do CPF

#    Aqui é onde é feito a construção da Interface Gráfica da área e
# também o calculo para a vaidação do CPF.


## Bibliotecas necessárias:
# Arquivo local:
from auxWidgets import AuxWidgets

# GUI:
from PyQt6.QtWidgets import QVBoxLayout, QHBoxLayout
from PyQt6.QtCore import Qt


class Gui_ValiCpf(AuxWidgets):
    ## Construtor: define a super classe e também o grupo
    def __init__(self) -> None:
        super(Gui_ValiCpf, self).__init__()

        self.root = self.gBox("Validação CPF")                                         # Cria o Group Box
        self.root.setEnabled(False)                                                     # v5.0: Deixa inativo

        self.gui_Ui()                                                                   # Chama o método de construção do Widget


    ## Destruidor: desaloca os atributos declarados
    def __del__(self) -> None:
        del self.root
        del self.txt, self.but, self.lblResp


    ## Método: cria e configura a janela
    def gui_Ui(self) -> None:
        layout = QVBoxLayout(self.root)

        ## Linha do CPF:
        cpfLayout = QHBoxLayout()
        cpfLayout.addWidget(self.lbl("CPF", 11))

        self.txt = self.lineEdit(11, readonly_=False)                                   # Permite adicionar texto
        cpfLayout.addWidget(self.txt)

        self.but = self.bts("Verificar")
        cpfLayout.addWidget(self.but)
        layout.addLayout(cpfLayout)

        ## Label de resposta:
        self.lblResp = self.lbl("INSIRA O CPF NO CAMPO ACIMA", 11)
        self.lblResp.setAlignment(Qt.AlignmentFlag.AlignCenter)                        # Deixa centralizado
        layout.addWidget(self.lblResp)
