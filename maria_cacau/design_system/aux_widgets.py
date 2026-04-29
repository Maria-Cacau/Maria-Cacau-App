"""Factory de widgets PyQt6 reutilizáveis em toda a interface."""

from PyQt6.QtCore import Qt
from PyQt6.QtGui import QFont
from PyQt6.QtWidgets import (QComboBox, QGraphicsView, QGroupBox, QLabel,
                             QLineEdit, QPushButton, QTextBrowser)


class AuxWidgets:
    ## Construtor:
    def __init__(self) -> None: pass


    ## Método: Cria as labels
    def lbl(self, txt_:str, tam_:int = 10) -> QLabel:
        lb = QLabel(txt_)                                                               # Cria uma label
        lb.setFont(QFont('Arial', tam_))                                                # Define a fonte
        lb.setAlignment(Qt.AlignmentFlag.AlignLeft | Qt.AlignmentFlag.AlignVCenter)    # Define o alinhamento
        return lb


    ## Método: Cria botões
    def bts(self, txt_:str) -> QPushButton:
        bt = QPushButton(txt_)                                                          # Cria o botão
        bt.setFont(QFont('Arial', 10))                                                  # Define a fonte
        return bt

    ## Método: Cria botões com imagem
    def button_img(self) -> QPushButton:
        btI = QPushButton()                                                             # Cria o botão
        btI.setStyleSheet("image : url(maria_cacau/assets/images/salvar-icon.png);")   # Define a imagem
        btI.setFixedSize(20, 20)                                                        # Define o tamanho fixo
        btI.setFont(QFont('Arial', 10))                                                 # Define a fonte
        return btI

    ## Método: Cria a área onde é mostrado e colocado o texto
    def line_edit(self, tam_:int = 10, readonly_:bool = True) -> QLineEdit:
        le = QLineEdit()                                                                # Cria uma entrada de texto
        le.setFont(QFont('Arial', tam_))                                                # Define a fonte
        le.setStyleSheet("background-color: white")                                    # Define a cor de fundo
        le.setReadOnly(readonly_)                                                       # Define se pode editar
        return le

    ## Método: Cria a área onde é mostrado textos grandes
    def text_view(self) -> QTextBrowser:
        tv = QTextBrowser()                                                             # Cria uma vizualização de texto
        tv.setFont(QFont('Consolas', 10))                                               # Define a fonte
        return tv

    ## Método: Cria a área onde é mostrado os gráficos
    def graph_view(self) -> QGraphicsView:
        gv = QGraphicsView()                                                            # Cria uma vizualização de gráfico
        gv.setEnabled(False)                                                            # Deixa inativo
        return gv

    ## Método: Cria os "Group Box"
    def group_box(self, n_:str) -> QGroupBox:
        gb = QGroupBox(n_)                                                              # Cria o Group Box
        gb.setFont(QFont('Arial', 12))                                                  # Define a fonte
        gb.setStyleSheet("""
            QGroupBox {
                border: 1px solid brown;
                margin-top: 20px;
            }
            QGroupBox::title {
                subcontrol-origin: margin;
                subcontrol-position: top left;
                left: 8px;
                padding: 0 4px;
            }
        """)                                                                            # Define a borda e o espaço pro título
        return gb

    ## Método: Cria uma área de seleção
    def combo_box(self) -> QComboBox:
        cb = QComboBox()                                                                # Cria o Combo Box
        cb.setFont(QFont('Arial', 10))                                                  # Define a fonte
        return cb

    ##### OUTRAS FUNÇÕES #####

    ## Método: Arruma a data de (aaaa-mm-dd) para (dd/mm/aaaa)
    def fix_date(self, d_:str) -> str: return "/".join(reversed(d_.split("-")))

    ## Método: ação do botão de copiar
    def on_copy(self, w_:QTextBrowser):
        w_.selectAll()                                                                  # Seleciona o texto
        w_.copy()                                                                       # Copia o texto
