"""Janela de popup para exibição de erros e informações ao usuário."""

from PyQt6.QtGui import QFont, QIcon
from PyQt6.QtWidgets import QMessageBox

from maria_cacau import asset
from maria_cacau.core.errors import AppError


class GuiPopup(QMessageBox):
    ## Construtor: Cria a gui e o necessário para futuras configurações
    def __init__(self) -> None:
        super().__init__()
        self.setup_ui()

    ## Método: Configura a interface (GUI)
    def setup_ui(self) -> None:
        self.setWindowIcon(QIcon(asset('images/logo-icone.png')))
        self.setStyleSheet("QLabel{max-width: 400px;};")                                # Define o tamanho máximo do espaço interno
        self.setIcon(QMessageBox.Icon.Critical)                                         # Define o ícone que mostra ao lado da mensagem
        self.setStandardButtons(QMessageBox.StandardButton.Save)                        # Add os botões
        self.setDefaultButton(QMessageBox.StandardButton.Save)                          # Botão padrão: "salvar"

        self.btEsq = self.button(QMessageBox.StandardButton.Save)                       # Atributo: guarda o botão "Cancel"/Sair
        self.btEsq.setFont(QFont('Arial', 10))                                          # Definindo a fonte dos botões
        self.btEsq.setText("OK")                                                        # Definindo o texto

    ## Método: Mostra a janela.
    def show_popup(self, msg_:AppError, icon_:str = "C") -> int:
        self.setWindowTitle(msg_.titulo)
        self.setText(msg_.subtitulo)
        self.setInformativeText(msg_.detalhe)
        if icon_ == "I": self.setIcon(QMessageBox.Icon.Information)
        return self.exec()
