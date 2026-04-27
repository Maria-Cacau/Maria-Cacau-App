"""Janela de popup para exibição de erros e informações ao usuário."""


from PyQt6.QtGui import QFont, QIcon
from PyQt6.QtWidgets import QMessageBox

from maria_cacau.core.errors import AppError


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
        self.setWindowIcon(QIcon('maria_cacau/assets/images/logo-icone.png'))                  # Define o icone da janela (geral)
        self.setStyleSheet("QLabel{max-width: 400px;};")                    # Define o tamanho máximo do espaço interno
        self.setIcon(QMessageBox.Icon.Critical)                             # Define o ícone que mostra ao lado da mensagem
        self.setStandardButtons(QMessageBox.StandardButton.Save)            # Add os botões
        self.setDefaultButton(QMessageBox.StandardButton.Save)              # Botão padrão: "salvar"

        self.btEsq = self.button(QMessageBox.StandardButton.Save)           # Atributo: guarda o botão "Cancel"/Sair
        self.btEsq.setFont(QFont('Arial', 10))                              # Definindo a fonte dos botões
        self.btEsq.setText("OK")                                            # Definindo o texto

    ## Método: Mostra a janela.
    def show_PopUp(self, msg_:AppError, icon_:str = "C") -> int:
        self.setWindowTitle(msg_.titulo)
        self.setText(msg_.subtitulo)
        self.setInformativeText(msg_.detalhe)
        if (icon_ == "I"): self.setIcon(QMessageBox.Icon.Information)
        return self.exec()
