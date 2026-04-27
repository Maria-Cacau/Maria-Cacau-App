######    Gui Reis   -   guisreis25@gmail.com    ######    COPYRIGHT © 2020 KINGS

# -*- coding: utf-8 -*-

## Classe responsável pela criação dos widgets usado na Interface Gráfica

#    Nessa classe é criada frames com label, entrada de texto e botão. SSão 
# usadas várias vezes dentro dá área de "Notas SAGE" e "Melhor Envio"


## Bibliotecas necessárias:
# Arquivo local:
from auxWidgets import AuxWidgets, QWidget

# GUI:
from PyQt6.QtWidgets import QFrame


class AuxFrame(QFrame, AuxWidgets):
    ## Construtor: define a super classe e também a janela principal
    def __init__(self, wid_:QWidget, nLb_:str, y_:int) -> None:                                 
        super(AuxFrame, self).__init__()

        self.setGeometry(10, y_, 450, 20)
        self.setParent(wid_)

        self.gui_Ui(nLb_)

    ## Destruidor: desaloca os atributos declarados
    def __del__(self) -> None:
        del self.but, self.txt

    ## Método: configura a frame
    def gui_Ui(self, nLb_:str) -> None:
        self.lbl(nLb_, 10, 10, 0, 70, 20, self)                # Add label

        self.txt = self.lineEdit(10, 80, 0, 330, 20, self)          # Add entrada de texto

        self.but = self.btsImg(420, 0, 20, 20, self)                # Add botão
        self.but.clicked.connect(self.bt_action)                    # Add ação do botão

    ## Método: ação do botão
    def bt_action(self):
        self.txt.selectAll()                                        # Seleciona o texto
        self.txt.copy()                                             # Copia o texto

    ## Método especial: pega o texto
    def getText(self) -> str: return self.txt.text()                # Retorna o texto

    ## Método especial: define o texto
    def setText(self, t_:str) -> None: self.txt.setText(t_)         # Define o texto