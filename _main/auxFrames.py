######    Gui Reis   -   guisreis25@gmail.com    ######    COPYRIGHT © 2020 KINGS

# -*- coding: utf-8 -*-

## Classe responsável pela criação dos widgets usado na Interface Gráfica

#    Nessa classe é criada frames com label, entrada de texto e botão. São
# usadas várias vezes dentro dá área de "Notas SAGE" e "Melhor Envio"


## Bibliotecas necessárias:
# Arquivo local:
from auxWidgets import AuxWidgets, QWidget

# GUI:
from PyQt6.QtWidgets import QFrame, QHBoxLayout


class AuxFrame(QFrame, AuxWidgets):
    ## Construtor: define a super classe
    def __init__(self, nLb_:str) -> None:
        super(AuxFrame, self).__init__()
        self.gui_Ui(nLb_)

    ## Destruidor: desaloca os atributos declarados
    def __del__(self) -> None:
        del self.but, self.txt

    ## Método: configura a frame
    def gui_Ui(self, nLb_:str) -> None:
        layout = QHBoxLayout(self)
        layout.setContentsMargins(2, 2, 2, 2)

        layout.addWidget(self.lbl(nLb_, 10))                                           # Add label

        self.txt = self.lineEdit(10)                                                    # Add entrada de texto
        layout.addWidget(self.txt)

        self.but = self.btsImg()                                                        # Add botão
        self.but.clicked.connect(self.bt_action)                                       # Add ação do botão
        layout.addWidget(self.but)

    ## Método: ação do botão
    def bt_action(self):
        self.txt.selectAll()                                                            # Seleciona o texto
        self.txt.copy()                                                                 # Copia o texto

    ## Método especial: pega o texto
    def getText(self) -> str: return self.txt.text()                                    # Retorna o texto

    ## Método especial: define o texto
    def setText(self, t_:str) -> None: self.txt.setText(t_)                            # Define o texto
