"""Janela principal da aplicação e orquestração das sub-features."""

from PyQt6.QtGui import QAction, QIcon, QPainter, QPixmap
from PyQt6.QtWidgets import (QApplication, QFileDialog, QHBoxLayout,
                             QMainWindow, QMenu, QMenuBar, QVBoxLayout,
                             QWidget)

from maria_cacau.assets import strings
from maria_cacau.core import errors
from maria_cacau.core.sheets.manager import manager
from maria_cacau.core.sheets.service import service
from maria_cacau.design_system.gui_popup import GuiPopup
from maria_cacau.features.home.sub_features.cpf_validation.cpf_validation_view import GuiValiCpf
from maria_cacau.features.home.sub_features.freight_query.freight_query_view import GuiConsFrete
from maria_cacau.features.home.sub_features.nota_fiscal.nota_fiscal_view import GuiDados
from maria_cacau.features.home.sub_features.orders_pendent.orders_pendent_view import GuiEntregas
from maria_cacau.features.home.sub_features.products_resume.products_resume_view import GuiProdutos


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

        self.setup_ui(root)

        self.datas:dict = {}
        self.dtEnt:str = ''
        self.dtDados:str = ''

        del tamTela, self.gVeriCpf, self.gConsCep

    ## Método: configura a interface
    def setup_ui(self, root:QWidget) -> None:
    ## ------------------------------------------------------------------------------------------------
    ## Barra do menu:
        self.mnConfig = QMenu(strings.MNU_ARQUIVO, self.menubar)
        self.menubar.addAction(self.mnConfig.menuAction())

        self.actLerPlan = QAction(strings.ACT_LER_PLANILHA, self)
        self.mnConfig.addAction(self.actLerPlan)
        self.actLerPlan.triggered.connect(self.on_ler_planilha)

        self.mnSeguranca = QMenu(strings.MNU_SEGURANCA, self.menubar)
        self.menubar.addAction(self.mnSeguranca.menuAction())

        self.actCertificado = QAction(strings.ACT_CONFIGURAR_CERT, self)
        self.actCertificado.setMenuRole(QAction.MenuRole.NoRole)
        self.mnSeguranca.addAction(self.actCertificado)
        self.actCertificado.triggered.connect(self.on_configurar_certificado)

        self.actLimparCertificado = QAction(strings.ACT_LIMPAR_CERT, self)
        self.actLimparCertificado.setMenuRole(QAction.MenuRole.NoRole)
        self.mnSeguranca.addAction(self.actLimparCertificado)
        self.actLimparCertificado.triggered.connect(self.on_limpar_certificado)

        self.mnAjuda = QMenu(strings.MNU_AJUDA, self.menubar)
        self.menubar.addAction(self.mnAjuda.menuAction())

        self.actSobre = QAction(strings.ACT_SOBRE, self)
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
            dia += self.gProdutos.resumo_dia(d, self.datas[d], manager.cadastro.get_data(manager.cadastro.get_col("produtos"), d))
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
                self.gEntregas.set_resumo(dt, manager.cadastro.get_data(manager.cadastro.get_col("entrega"), dt))
                self.gEntregas.set_text(self.gEntregas.res)
                if not self.gEntregas.btCopiarTxt.isEnabled():
                    self.gEntregas.btCopiarTxt.setEnabled(True)
            self.dtEnt = dt
        del dt

    ## Método: ação do botão OK da área de Dados
    def on_ok_dados(self) -> None:
        dt:str = self.gDados.get_date()
        if self.dtDados != dt:
            arq = manager.cadastro.get_dados(manager.cadastro.get_col("sage"), dt)
            arq['belga'] = self.gDados.set_belga(manager.cadastro.get_dados(manager.cadastro.get_col("belga"), dt))
            self.gDados.set_resumo(arq)
            self.dtDados = dt
            del arq
        del dt

    ## Método: Ação do menu "Configurar certificado"
    def on_configurar_certificado(self) -> None:
        path, _ = QFileDialog.getOpenFileName(self, strings.DLG_CERT_TITULO, "", strings.DLG_CERT_FILTRO)
        if not path:
            GuiPopup().show_popup(errors.C001)
            return
        try:
            service.load_credentials_from_file(path)
            GuiPopup().show_popup(errors.certificado_ok(), "I")
        except Exception:
            GuiPopup().show_popup(errors.C002)

    ## Método: Ação do menu "Limpar certificado"
    def on_limpar_certificado(self) -> None:
        from PyQt6.QtWidgets import QMessageBox
        confirm = QMessageBox.question(
            self, strings.DLG_LIMPAR_CERT_TITULO,
            strings.DLG_LIMPAR_CERT_MSG,
            QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.No,
        )
        if confirm != QMessageBox.StandardButton.Yes:
            return
        if service.clear_credentials():
            GuiPopup().show_popup(errors.certificado_limpo(), "I")
        else:
            GuiPopup().show_popup(errors.C003)

    ## Método: Ação do botão "Ler planilha"
    def on_ler_planilha(self) -> None:
        if "Ler planilha" == self.gDados.btAttAtiv.text():
            if manager.connect():
                self.datas = manager.cadastro.get_recent_dates(20)

                self.gEntregas.set_cols(manager.cadastro.get_col("entrega"))
                self.gEntregas.set_dates(self.datas)
                self.gEntregas.btAttAtiv.clicked.connect(self.gEntregas.on_ativar)
                self.gEntregas.btAttAtiv.setText(strings.BTN_ATIVAR)
                self.gEntregas.set_text(strings.TXT_ATIVAR_INSTRUCAO)

                self.gProdutos.set_dates(self.datas)
                self.gProdutos.btAttAtiv.clicked.connect(self.gProdutos.on_ativar)
                self.gProdutos.btAttAtiv.setText(strings.BTN_ATIVAR)
                self.gProdutos.set_text(strings.TXT_ATIVAR_INSTRUCAO)

                self.gDados.set_dates(self.datas)
                self.gDados.set_trad(manager.cadastro.get_col("gsage"), manager.cadastro.get_col("glbl"))
                self.gDados.btAttAtiv.clicked.connect(self.gDados.on_ativar)
                self.gDados.btAttAtiv.setText(strings.BTN_ATIVAR)

                self.actLerPlan.setEnabled(False)
