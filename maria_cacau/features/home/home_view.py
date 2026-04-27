######    Gui Reis   -   guisreis25@gmail.com    ######    COPYRIGHT © 2020 KINGS

# -*- coding: utf-8 -*-

## Classe responsável pela criação da janela principal


from PyQt6.QtCore import Qt
from PyQt6.QtGui import QAction, QIcon, QPainter, QPixmap
from PyQt6.QtWidgets import (QApplication, QFileDialog, QHBoxLayout,
                             QMainWindow, QMenu, QMenuBar, QVBoxLayout,
                             QWidget)

from maria_cacau.assets import strings
from maria_cacau.core.analisePlan import Analise
from maria_cacau.features.home.sub_features.cpf_validation.cpf_validation_view import \
    Gui_ValiCpf
from maria_cacau.features.home.sub_features.freight_query.freight_query_view import \
    Gui_ConsFrete
from maria_cacau.features.home.sub_features.nota_fiscal.nota_fiscal_view import \
    Gui_Dados
from maria_cacau.features.home.sub_features.orders_pendent.orders_pendent_view import \
    Gui_Entregas
## Bibliotecas necessárias:
from maria_cacau.features.home.sub_features.products_resume.products_resume_view import \
    Gui_Produtos


class _BackgroundWidget(QWidget):
    def __init__(self, image_path: str):
        super().__init__()
        self._pixmap = QPixmap(image_path)

    def paintEvent(self, event):
        painter = QPainter(self)
        painter.drawPixmap(self.rect(), self._pixmap)


class Gui_main(QMainWindow):
    ## Construtor: Cria a janela principal com o menu e o local onde vai ser colocado as páginas
    def __init__(self) -> None:
        super(Gui_main, self).__init__()

        self.setWindowIcon(QIcon('maria_cacau/assets/images/logo-icone.png'))
        self.setWindowTitle("Maria Cacau - Consulta")

        tamTela = QApplication.primaryScreen().availableGeometry()
        self.setMinimumSize(tamTela.width()-300, tamTela.height()-200)
        self.showMaximized()

        self.menubar = QMenuBar(self)
        self.menubar.setGeometry(0, 0, tamTela.width(), 22)
        self.setMenuBar(self.menubar)

        root = _BackgroundWidget('maria_cacau/assets/images/background.png')
        self.setCentralWidget(root)

        self.gProdutos = Gui_Produtos()
        self.gEntregas = Gui_Entregas()
        self.gDados = Gui_Dados()
        self.gVeriCpf = Gui_ValiCpf()
        self.gConsCep = Gui_ConsFrete()

        self.aAna = Analise()

        self.gui_Ui(root)

        self.datas:dict = {}
        self.dtEnt:str = ''
        self.dtDados:str = ''

        del tamTela, self.gVeriCpf, self.gConsCep


    ## Destruidor: desaloca os atributos declarados
    def __del__(self) -> None:
        del self.gProdutos, self.gEntregas, self.gDados
        del self.aAna, self.datas, self.dtEnt, self.dtDados

    ## Método: configura a interface
    def gui_Ui(self, root:QWidget) -> None:
    ## ------------------------------------------------------------------------------------------------
    ## Barra do menu:
        self.mnConfig = QMenu("Arquivo", self.menubar)
        self.menubar.addAction(self.mnConfig.menuAction())

        self.actLerPlan = QAction("Ler planilha", self)
        self.mnConfig.addAction(self.actLerPlan)
        self.actLerPlan.triggered.connect(self.btLerPlan_action)

        self.mnAjuda = QMenu("Ajuda", self.menubar)
        self.menubar.addAction(self.mnAjuda.menuAction())

        self.actSobre = QAction("Sobre", self)
        self.mnAjuda.addAction(self.actSobre)

    ## ------------------------------------------------------------------------------------------------
    ## Layout principal:
        mainLayout = QHBoxLayout(root)
        mainLayout.addWidget(self.gProdutos.root, stretch=3)

        rightLayout = QVBoxLayout()
        rightLayout.addWidget(self.gEntregas.root, stretch=3)

        bottomLayout = QHBoxLayout()
        bottomLayout.addWidget(self.gDados.root, stretch=4)

        farRightLayout = QVBoxLayout()
        farRightLayout.addWidget(self.gVeriCpf.root)
        farRightLayout.addWidget(self.gConsCep.root)
        bottomLayout.addLayout(farRightLayout, stretch=3)

        rightLayout.addLayout(bottomLayout, stretch=4)
        mainLayout.addLayout(rightLayout, stretch=7)

    ## ------------------------------------------------------------------------------------------------
    ## Ações de botão:
        self.gEntregas.btAttAtiv.clicked.connect(self.btLerPlan_action)
        self.gEntregas.btOk.clicked.connect(self.btOk_actionEnt)

        self.gProdutos.btAttAtiv.clicked.connect(self.btLerPlan_action)
        self.gProdutos.btOk.clicked.connect(self.btOk_actionProd)

        self.gDados.btAttAtiv.clicked.connect(self.btLerPlan_action)
        self.gDados.btOk.clicked.connect(self.btOk_actionDados)


    ## Método: Ação do botão "OK" da área de Produtos
    def btOk_actionProd(self) -> None:
        dia:str = ''
        for d in sorted(self.datas.keys()):
            dia += f"\n\nDia {self.gProdutos.fixDate(d[:10])} - {self.datas[d]} pedido(s)\n"
            dia += self.gProdutos.pedidosDia(d, self.datas[d], self.aAna.getArq(self.aAna.getCol("Produtos"),d))
            self.gProdutos.pedDia = {}

        self.gProdutos.setResumo(dia)
        self.gProdutos.btCopiarTxt.setEnabled(True)
        self.gProdutos.btOk.setEnabled(False)
        del dia, d

    ## Método: ação do botão "OK" da área de Entregas
    def btOk_actionEnt(self) -> None:
        dt:str = self.gEntregas.getDta()
        if (self.dtEnt != dt):
            if (dt in self.gEntregas.resumos.keys()): self.gEntregas.setTxt(self.gEntregas.resumos[dt])
            else:
                self.gEntregas.setResumo(dt, self.aAna.getArq(self.aAna.getCol("Entrega"),dt))
                self.gEntregas.txt.setText(self.gEntregas.res)
                if (not self.gEntregas.btCopiarTxt.isEnabled()):
                    self.gEntregas.btCopiarTxt.setEnabled(True)
            self.dtEnt = dt
        del dt

    ## Método: ação do botão OK da área de Dados
    def btOk_actionDados(self) -> None:
        dt:str = self.gDados.getDta()
        if (self.dtDados != dt):
            arq = self.aAna.getArqDados(self.aAna.getCol("Sage"), dt)
            arq['Belga'] = self.gDados.setBelga(self.aAna.getArqDados(self.aAna.getCol("Belga"), dt))
            self.gDados.setResumo(arq)
            self.dtDados = dt
            del arq
        del dt

    ## Método: Ação do botão "Ler planilha"
    def btLerPlan_action(self) -> None:
        if ("Ler planilha" == self.gDados.btAttAtiv.text()):
            locArq:tuple = QFileDialog.getOpenFileName(self, "Escolha o arquivo Excel padronizado")
            if (self.aAna.setArq(locArq[0])):
                self.datas = self.aAna.getDts()

                self.gEntregas.setCol(self.aAna.getCol("Entrega"))
                self.gEntregas.setDta(self.datas)
                self.gEntregas.btAttAtiv.clicked.connect(self.gEntregas.btAtiv_action)
                self.gEntregas.btAttAtiv.setText(strings.BTN_ATIVAR)
                self.gEntregas.setTxt(strings.TXT_ATIVAR_INSTRUCAO)

                self.gProdutos.setDta(self.datas)
                self.gProdutos.btAttAtiv.clicked.connect(self.gProdutos.btAtiv_action)
                self.gProdutos.btAttAtiv.setText(strings.BTN_ATIVAR)
                self.gProdutos.setTxt(strings.TXT_ATIVAR_INSTRUCAO)

                self.gDados.setDta(self.datas)
                self.gDados.setTrad(self.aAna.getCol("gSage"), self.aAna.getCol("gLbl"))
                self.gDados.btAttAtiv.clicked.connect(self.gDados.btAtiv_action)
                self.gDados.btAttAtiv.setText(strings.BTN_ATIVAR)

                self.actLerPlan.setEnabled(False)
            del locArq
