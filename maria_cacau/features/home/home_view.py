"""Janela principal da aplicação e orquestração das sub-features."""

from PyQt6.QtGui import QAction, QIcon, QPainter, QPixmap
from PyQt6.QtWidgets import (QApplication, QFileDialog, QHBoxLayout,
                             QMainWindow, QMenu, QMenuBar, QVBoxLayout,
                             QWidget)

from maria_cacau.assets import strings
from maria_cacau.core.analisePlan import Analise
from maria_cacau.features.home.sub_features.cpf_validation.cpf_validation_view import \
    GuiValiCpf
from maria_cacau.features.home.sub_features.freight_query.freight_query_view import \
    GuiConsFrete
from maria_cacau.features.home.sub_features.nota_fiscal.nota_fiscal_view import \
    GuiDados
from maria_cacau.features.home.sub_features.orders_pendent.orders_pendent_view import \
    GuiEntregas
from maria_cacau.features.home.sub_features.products_resume.products_resume_view import \
    GuiProdutos


class _BackgroundWidget(QWidget):
    def __init__(self, image_path: str):
        super().__init__()
        self._pixmap = QPixmap(image_path)

    def paintEvent(self, event):
        painter = QPainter(self)
        painter.drawPixmap(self.rect(), self._pixmap)


class GuiMain(QMainWindow):
    ## Construtor: Cria a janela principal com o menu e o local onde vai ser colocado as páginas
    def __init__(self) -> None:
        super().__init__()

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

        self.gProdutos = GuiProdutos()
        self.gEntregas = GuiEntregas()
        self.gDados = GuiDados()
        self.gVeriCpf = GuiValiCpf()
        self.gConsCep = GuiConsFrete()

        self.aAna = Analise()

        self.setup_ui(root)

        self.datas:dict = {}
        self.dtEnt:str = ''
        self.dtDados:str = ''

        del tamTela, self.gVeriCpf, self.gConsCep

    ## Método: configura a interface
    def setup_ui(self, root:QWidget) -> None:
    ## ------------------------------------------------------------------------------------------------
    ## Barra do menu:
        self.mnConfig = QMenu("Arquivo", self.menubar)
        self.menubar.addAction(self.mnConfig.menuAction())

        self.actLerPlan = QAction("Ler planilha", self)
        self.mnConfig.addAction(self.actLerPlan)
        self.actLerPlan.triggered.connect(self.on_ler_planilha)

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
        self.gEntregas.btAttAtiv.clicked.connect(self.on_ler_planilha)
        self.gEntregas.btOk.clicked.connect(self.on_ok_entregas)

        self.gProdutos.btAttAtiv.clicked.connect(self.on_ler_planilha)
        self.gProdutos.btOk.clicked.connect(self.on_ok_produtos)

        self.gDados.btAttAtiv.clicked.connect(self.on_ler_planilha)
        self.gDados.btOk.clicked.connect(self.on_ok_dados)

    ## Método: Ação do botão "OK" da área de Produtos
    def on_ok_produtos(self) -> None:
        dia:str = ''
        for d in sorted(self.datas):
            dia += f"\n\nDia {self.gProdutos.fix_date(d[:10])} - {self.datas[d]} pedido(s)\n"
            dia += self.gProdutos.resumo_dia(d, self.datas[d], self.aAna.get_data(self.aAna.get_col("Produtos"),d))
            self.gProdutos.pedDia = {}

        self.gProdutos.set_resumo(dia)
        self.gProdutos.btCopiarTxt.setEnabled(True)
        self.gProdutos.btOk.setEnabled(False)
        del dia, d

    ## Método: ação do botão "OK" da área de Entregas
    def on_ok_entregas(self) -> None:
        dt:str = self.gEntregas.get_date()
        if self.dtEnt != dt:
            if dt in self.gEntregas.resumos: self.gEntregas.set_text(self.gEntregas.resumos[dt])
            else:
                self.gEntregas.set_resumo(dt, self.aAna.get_data(self.aAna.get_col("Entrega"),dt))
                self.gEntregas.set_text(self.gEntregas.res)
                if not self.gEntregas.btCopiarTxt.isEnabled():
                    self.gEntregas.btCopiarTxt.setEnabled(True)
            self.dtEnt = dt
        del dt

    ## Método: ação do botão OK da área de Dados
    def on_ok_dados(self) -> None:
        dt:str = self.gDados.get_date()
        if self.dtDados != dt:
            arq = self.aAna.get_dados(self.aAna.get_col("Sage"), dt)
            arq['Belga'] = self.gDados.set_belga(self.aAna.get_dados(self.aAna.get_col("Belga"), dt))
            self.gDados.set_resumo(arq)
            self.dtDados = dt
            del arq
        del dt

    ## Método: Ação do botão "Ler planilha"
    def on_ler_planilha(self) -> None:
        if "Ler planilha" == self.gDados.btAttAtiv.text():
            locArq:tuple = QFileDialog.getOpenFileName(self, "Escolha o arquivo Excel padronizado")
            if self.aAna.load_file(locArq[0]):
                self.datas = self.aAna.get_dates()

                self.gEntregas.set_cols(self.aAna.get_col("Entrega"))
                self.gEntregas.set_dates(self.datas)
                self.gEntregas.btAttAtiv.clicked.connect(self.gEntregas.on_ativar)
                self.gEntregas.btAttAtiv.setText(strings.BTN_ATIVAR)
                self.gEntregas.set_text(strings.TXT_ATIVAR_INSTRUCAO)

                self.gProdutos.set_dates(self.datas)
                self.gProdutos.btAttAtiv.clicked.connect(self.gProdutos.on_ativar)
                self.gProdutos.btAttAtiv.setText(strings.BTN_ATIVAR)
                self.gProdutos.set_text(strings.TXT_ATIVAR_INSTRUCAO)

                self.gDados.set_dates(self.datas)
                self.gDados.set_trad(self.aAna.get_col("gSage"), self.aAna.get_col("gLbl"))
                self.gDados.btAttAtiv.clicked.connect(self.gDados.on_ativar)
                self.gDados.btAttAtiv.setText(strings.BTN_ATIVAR)

                self.actLerPlan.setEnabled(False)
            del locArq
