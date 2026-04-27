######    Gui Reis   -   guisreis25@gmail.com    ######    COPYRIGHT © 2020 KINGS

# -*- coding: utf-8 -*-

## Classe responsável pela criação da área de Validação do CPF

#    Aqui é onde é feito a construção da Interface Gráfica da área e 
# também o calculo para a vaidação do CPF.


## Bibliotecas necessárias:
# Arquivo local:
from auxWidgets import AuxWidgets

# GUI:
from auxWidgets import QWidget, Qt


class Gui_ValiCpf(AuxWidgets):
    ## Construtor: define a super classe e também o grupo
    def __init__(self, wid_:QWidget) -> None:                                 
        super(Gui_ValiCpf, self).__init__()

        self.root = self.gBox("Validação CPF", 990, 320, 360, 110, wid_)    # Cria o Group Box
        self.root.setEnabled(False)                                         # v5.0: Deixa inativo

        self.gui_Ui()                                                       # Chama o método de construção do Widget
        

    ## Destruidor: desaloca os atributos declarados
    def __del__(self) -> None:
        del self.root
        del self.txt, self.but, self.lblResp


    ## Método: cria e configura a janela
    def gui_Ui(self) -> None:
        lb = self.lbl("CPF", 11, 10, 30, 40, 20, self.root)                 # Add label CPF

        self.txt = self.lineEdit(11, 55, 30, 180, 20, self.root)            # Add entrada de texto
        self.txt.setReadOnly(False)                                         # Permite adicionar texto

        self.but = self.bts("Verificar", 250, 29, 102, 22, self.root)       # Add botão

        txt = "INSIRA O CPF NO CAMPO ACIMA"
        self.lblResp = self.lbl(txt, 11, 10, 60, 340, 40, self.root)        # Add label de resposta
        self.lblResp.setAlignment(Qt.AlignmentFlag.AlignCenter)                # Deixa centralizado

        del txt, lb