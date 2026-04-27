######    Gui Reis   -   guisreis25@gmail.com    ######    COPYRIGHT © 2020 KINGS

# -*- coding: utf-8 -*-

## Classe responsável pela criação da área de consulta de frete

#    Essa classe é responsável pela interface gráfica + toda
# a parte lógica.


## Bibliotecas necessárias:
from maria_cacau.design_system.aux_widgets import AuxWidgets

from PyQt6.QtWidgets import QVBoxLayout, QHBoxLayout


class Gui_ConsFrete(AuxWidgets):
    ## Construtor: define a super classe e também o grupo
    def __init__(self) -> None:
        super(Gui_ConsFrete, self).__init__()

        self.root = self.gBox("Consulta Frete")                                         # Cria o Group Box
        self.root.setEnabled(False)                                                      # v5.0: Deixa inativo

        self.gui_Ui()

    ## Destruidor: desaloca os atributos declarados
    def __del__(self) -> None:
        del self.root
        del self.btVeri, self.btCopi, self.resp, self.tOrigem, self.tDestino

    ## Método: cria e configura a janela
    def gui_Ui(self) -> None:
        layout = QVBoxLayout(self.root)

        inputLayout = QHBoxLayout()
        inputLayout.addWidget(self.lbl("Origem:", 10))
        self.tOrigem = self.lineEdit(10, readonly_=False)
        inputLayout.addWidget(self.tOrigem)
        inputLayout.addWidget(self.lbl("Destino:", 10))
        self.tDestino = self.lineEdit(10, readonly_=False)
        inputLayout.addWidget(self.tDestino)
        layout.addLayout(inputLayout)

        self.resp = self.txtView()
        layout.addWidget(self.resp)

        btnLayout = QHBoxLayout()
        btnLayout.addStretch()
        self.btVeri = self.bts("Verificar")
        btnLayout.addWidget(self.btVeri)
        self.btCopi = self.bts("Copiar")
        btnLayout.addWidget(self.btCopi)
        layout.addLayout(btnLayout)
