######    Gui Reis   -   guisreis25@gmail.com    ######    COPYRIGHT © 2020 KINGS

# -*- coding: utf-8 -*-

## Classe responsável pela criação dos widgets usado na Interface Gráfica

#    Nessa classe é criada os widgets personalizados que serão usados em toda
# a interface: botão, etiquetas (labels), estrada de textos, áreas de vizualização
# de textos e gráficos.
#    Por ser usados mais de uma vez passa a ser mais otimizado dessa forma.


## Bibliotecas necessárias:
# GUI:
from PyQt6.QtWidgets import QLabel, QPushButton, QGroupBox, QLineEdit, QTextBrowser, QGraphicsView, QWidget, QComboBox
from PyQt6.QtGui import QFont
from PyQt6.QtCore import Qt


class AuxWidgets:
    ## Construtor: 
    def __init__(self) -> None: pass
        
    ## Destruidor:
    def __del__(self) -> None: pass
        

    ## Método: Cria as labels
    def lbl(self, txt_:str, tam_:int, p1_:int, p2_:int, p3_:int, p4_:int, wid_:QWidget) -> QLabel:
        lb = QLabel(txt_, wid_)                                                 # Cria uma label
        lb.setGeometry(p1_, p2_, p3_, p4_)                                      # Define a posição
        lb.setFont(QFont('Arial', tam_))                                        # Define a fonte
        lb.setAlignment(Qt.AlignmentFlag.AlignLeft | Qt.AlignmentFlag.AlignVCenter)  # Define o alinhamento
        return lb
    
    
    ## Método: Cria botões
    def bts(self, txt_:str, p1_:int, p2_:int, p3_:int, p4_:int, wid_:QWidget) -> QPushButton:
        bt = QPushButton(txt_, wid_)                                            # Cria o botão
        bt.setGeometry(p1_, p2_, p3_, p4_)                                      # Define a posição
        bt.setFont(QFont('Arial', 10))                                          # Define a fonte
        return bt
    
    ## Método: Cria botões com imagem 
    def btsImg(self, p1_:int, p2_:int, p3_:int, p4_:int, wid_:QWidget) -> QPushButton:
        btI = QPushButton(parent=wid_)                                          # Cria o botão
        btI.setStyleSheet("image : url(images/salvar-icon.png);")               # Define a imagem
        btI.setGeometry(p1_, p2_, p3_, p4_)                                     # Define a posição
        btI.setFont(QFont('Arial', 10))                                         # Define a fonte
        return btI
    
    ## Método: Cria a área onde é mostrado e colocado o texto
    def lineEdit(self, tam_:int, p1_:int, p2_:int, p3_:int, p4_:int, wid_:QWidget) -> QLineEdit:
        le = QLineEdit(wid_)                                                    # Cria uma entrada de texto
        le.setGeometry(p1_, p2_, p3_, p4_)                                      # Define a posição
        le.setFont(QFont('Arial', tam_))                                        # Define a fonte
        le.setStyleSheet("background-color: white")                             # Define a cor de fundo
        le.setReadOnly(True)                                                    # Não poode editar o conteúdo
        return le

    ## Método: Cria a área onde é mostrado textos grandes
    def txtView(self, p1_:int, p2_:int, p3_:int, p4_:int, wid_:QWidget) -> QTextBrowser:
        tv = QTextBrowser(wid_)                                                 # Cria uma vizualização de texto
        tv.setGeometry(p1_, p2_, p3_, p4_)                                      # Define a posição
        tv.setFont(QFont('Consolas', 10))                                       # Define a fonte
        return tv

    ## Método: Cria a área onde é mostrado os gráficos
    def graphView(self, p1_:int, p2_:int, p3_:int, p4_:int, wid_:QWidget) -> QGraphicsView:
        gv = QGraphicsView(wid_)                                                # Cria uma vizualização de texto
        gv.setGeometry(p1_, p2_, p3_, p4_)                                      # Define a posição
        gv.setEnabled(False)                                                    # Deixa inativo
        return gv
    
    ## Método: Cria os "Group Box"
    def gBox(self, n_:str, p1_:int, p2_:int, p3_:int, p4_:int, wid_:QWidget) -> QGroupBox:
        gb = QGroupBox(n_, wid_)                                                # Cria o Gruop Box 
        gb.setGeometry(p1_, p2_, p3_, p4_)                                      # Define as proporções
        gb.setFont(QFont('Arial', 12))                                          # Define a fonte
        gb.setStyleSheet("QGroupBox {border: 1px solid brown;}")                # Define a borda
        return gb
    
    ## Método: Cria uma label e uma entrada de texto
    def lblBt(self, n_:str, xLb_:int, xBt_:int, wid_:QWidget) -> QLineEdit:
        self.lbl(n_, 11, xLb_, 30, 60, 20, wid_)                                # Cria a label
        txt = self.lineEdit(11, xBt_, 30, 90, 20, wid_)                         # Cria a entrada de texto
        txt.setReadOnly(False)                                                  # Permite o usuário digitar
        return txt
    
    ## Método: Cria uma área de seleção
    def cBox(self, p1_:int, p2_:int, p3_:int, p4_:int, wid_:QWidget) -> QComboBox:
        gb = QComboBox(wid_)                                                    # Cria o Gruop Box 
        gb.setGeometry(p1_, p2_, p3_, p4_)                                      # Define as proporções
        gb.setFont(QFont('Arial', 10))                                          # Define a fonte
        return gb

    ##### OUTRAS FUNÇÕES #####

    ## Método: Arruma a data de (aaaa-mm-dd) para (dd/mm/aaaa)
    def fixDate(self, d_:str) -> str: return "/".join(reversed(d_.split("-")))

    ## Método: ação do botão de copiar
    def btCopiar_action(self, w_:QTextBrowser):
        w_.selectAll()                                                          # Seleciona o texto
        w_.copy()                                                               # Copia o texto