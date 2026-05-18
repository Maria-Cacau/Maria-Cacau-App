"""Janela de popup para exibição de erros e informações ao usuário."""

from dataclasses import dataclass
from enum import Enum

from PyQt6.QtGui import QFont, QIcon
from PyQt6.QtWidgets import QMessageBox

from maria_cacau import asset


class PopupIcon(Enum):
    CRITICAL = QMessageBox.Icon.Critical
    WARNING  = QMessageBox.Icon.Warning
    INFO     = QMessageBox.Icon.Information


@dataclass
class PopupModel:
    title:   str
    message: str
    icon:    PopupIcon = PopupIcon.CRITICAL
    detail:  str | None = None


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

    def show(self, model: PopupModel) -> int:
        self.setWindowTitle(model.title)
        self.setText(model.message)
        self.setInformativeText(model.detail or "")
        self.setIcon(model.icon.value)
        return self.exec()
