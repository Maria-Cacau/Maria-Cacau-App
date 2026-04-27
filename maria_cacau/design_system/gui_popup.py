######    Gui Reis   -   guisreis25@gmail.com    ######    COPYRIGHT © 2020 KINGS

# -*- coding: utf-8 -*-

## Classe responsável pela criação da janela PopUp

#    Nessa classe é criada a janela Pop-Up quando faz alguma alteração e essa
# não é salva. Aqui é gerado e feito toda a configuração dela.


## Bibliotecas necessárias:
from PyQt6.QtWidgets import QMessageBox
from PyQt6.QtGui import QIcon, QFont


class Gui_popup(QMessageBox):
    ## Construtor: Cria a gui e o necessário para futuras configurações
    def __init__(self) -> None:
        super(Gui_popup, self).__init__()
        self.gui_Ui()

    ## Destruidor: Deleta os atributos
    def __del__(self) -> None:
        del self.btEsq

    ## Método: Configura a interface (GUI)
    def gui_Ui(self) -> None:
        self.setWindowIcon(QIcon('assets/logo-icone.png'))                  # Define o icone da janela (geral)
        self.setStyleSheet("QLabel{max-width: 400px;};")                    # Define o tamanho máximo do espaço interno
        self.setIcon(QMessageBox.Icon.Critical)                             # Define o ícone que mostra ao lado da mensagem
        self.setStandardButtons(QMessageBox.StandardButton.Save)            # Add os botões
        self.setDefaultButton(QMessageBox.StandardButton.Save)              # Botão padrão: "salvar"

        self.btEsq = self.button(QMessageBox.StandardButton.Save)           # Atributo: guarda o botão "Cancel"/Sair
        self.btEsq.setFont(QFont('Arial', 10))                              # Definindo a fonte dos botões
        self.btEsq.setText("OK")                                            # Definindo o texto

    ## Método: Mostra a janela.
    def show_PopUp(self, lMsg_:list, icon_:str = "C") -> int:
        self.setTxts(lMsg_)                                                 # Define as mensagens
        if (icon_ == "I"): self.setIcon(QMessageBox.Icon.Information)      # Define o ícone de informação
        return self.exec()

    ## Método: Define o texto de saída
    def setTxts(self, lTxts_:list) -> None:
        self.setWindowTitle(lTxts_[0])                                      # Título da janela
        self.setText(lTxts_[1])                                             # Título da mensagem
        self.setInformativeText(lTxts_[2])                                  # Mensagem (pergunta)
