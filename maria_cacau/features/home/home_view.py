"""Janela principal da aplicação e orquestração das sub-features."""

import re
from pathlib import Path

from PyQt6.QtGui import QAction, QIcon, QPainter, QPixmap
from PyQt6.QtWidgets import (QApplication, QDialog, QDialogButtonBox,
                             QFileDialog, QFormLayout, QHBoxLayout, QInputDialog,
                             QLineEdit, QMainWindow, QMenu, QMenuBar, QMessageBox,
                             QVBoxLayout, QWidget)

from maria_cacau.assets import strings
from maria_cacau.core import errors
from maria_cacau.core.storage.cache import CacheStorage
from maria_cacau.core.sheets.manager import manager
from maria_cacau.core.sheets.service import service
from maria_cacau.design_system.gui_popup import GuiPopup
from maria_cacau.features.home.sub_features.cpf_validation.cpf_validation_view import GuiValiCpf
from maria_cacau.features.home.sub_features.freight_query.freight_query_view import GuiConsFrete
from maria_cacau.features.home.sub_features.nota_fiscal.nota_fiscal_view import GuiDados
from maria_cacau.features.home.sub_features.orders_pendent.orders_pendent_view import GuiEntregas
from maria_cacau.features.home.sub_features.products_resume.products_resume_view import GuiProdutos

_SHEETS_KEY   = 'sheets'
_sheets_cache = CacheStorage(Path.home() / '.mariacacau')


def _extract_sheet_id(url: str) -> str | None:
    match = re.search(r'/spreadsheets/d/([a-zA-Z0-9-_]+)', url)
    if match:
        return match.group(1)
    if re.match(r'^[a-zA-Z0-9-_]{20,}$', url):
        return url
    return None


class _DialogConectarPlanilha(QDialog):
    def __init__(self, parent=None) -> None:
        super().__init__(parent)
        self.setWindowTitle(strings.DLG_CONECTAR_TITULO)

        layout = QVBoxLayout(self)
        form = QFormLayout()

        self._link = QLineEdit()
        self._link.setPlaceholderText(strings.DLG_CONECTAR_PLACEHOLDER_LINK)
        form.addRow(strings.DLG_CONECTAR_LBL_LINK, self._link)

        self._nome = QLineEdit()
        self._nome.setPlaceholderText(strings.DLG_CONECTAR_PLACEHOLDER_NOME)
        form.addRow(strings.DLG_CONECTAR_LBL_NOME, self._nome)

        layout.addLayout(form)

        buttons = QDialogButtonBox(
            QDialogButtonBox.StandardButton.Ok | QDialogButtonBox.StandardButton.Cancel
        )
        buttons.accepted.connect(self.accept)
        buttons.rejected.connect(self.reject)
        layout.addWidget(buttons)

    @property
    def link(self) -> str:
        return self._link.text().strip()

    @property
    def nome(self) -> str:
        return self._nome.text().strip()


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

        self.datas: dict = {}
        self.dtEnt: str = ''
        self.dtDados: str = ''

        del tamTela, self.gVeriCpf, self.gConsCep

    ## Método: configura a interface
    def setup_ui(self, root: QWidget) -> None:
    ## ------------------------------------------------------------------------------------------------
    ## Barra do menu:
        self.mnConfig = QMenu(strings.MNU_ARQUIVO, self.menubar)
        self.menubar.addAction(self.mnConfig.menuAction())

        self.actConectar = QAction(strings.ACT_CONECTAR_PLANILHA, self)
        self.mnConfig.addAction(self.actConectar)
        self.actConectar.triggered.connect(self.on_conectar_planilha)

        self.mnPlanilhasConectadas = QMenu(strings.ACT_PLANILHAS_CONECTADAS, self)
        self.mnConfig.addMenu(self.mnPlanilhasConectadas)
        self._sheet_actions: dict = {}
        for entry in self._load_sheets():
            self._add_planilha_menu(entry['nome'], entry['sheet_id'])

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
        self.gEntregas.btAttAtiv.clicked.connect(self._on_ativar_entregas)
        self.gEntregas.btAttAtiv.setEnabled(False)
        self.gEntregas.btOk.clicked.connect(self.on_ok_entregas)

        self.gProdutos.btAttAtiv.clicked.connect(self._on_ativar_produtos)
        self.gProdutos.btAttAtiv.setEnabled(False)
        self.gProdutos.btOk.clicked.connect(self.on_ok_produtos)

        self.gDados.btAttAtiv.clicked.connect(self._on_ativar_dados)
        self.gDados.btAttAtiv.setEnabled(False)
        self.gDados.btOk.clicked.connect(self.on_ok_dados)

    ## Método: Ativar entregas — lê Cadastro (lazy) e popula datas
    def _on_ativar_entregas(self) -> None:
        manager.load_cadastro()
        self._ensure_datas()
        self.gEntregas.set_cols(manager.cadastro.get_col("entrega"))
        self.gEntregas.set_dates(self.datas)
        self.gEntregas.on_ativar()

    ## Método: Ativar produtos — lê Cadastro (lazy) e popula datas
    def _on_ativar_produtos(self) -> None:
        manager.load_cadastro()
        self._ensure_datas()
        self.gProdutos.set_dates(self.datas)
        self.gProdutos.on_ativar()

    ## Método: Ativar dados — lê Cadastro (lazy) e popula datas
    def _on_ativar_dados(self) -> None:
        manager.load_cadastro()
        self._ensure_datas()
        self.gDados.set_dates(self.datas)
        self.gDados.set_trad(manager.cadastro.get_col("gsage"), manager.cadastro.get_col("glbl"))
        self.gDados.on_ativar()

    ## Método: Garante que self.datas está populado (chamado após load_cadastro)
    def _ensure_datas(self) -> None:
        if not self.datas:
            self.datas = manager.cadastro.get_recent_dates(20)

    ## Método: Ação do botão "OK" da área de Produtos
    def on_ok_produtos(self) -> None:
        dia: str = ''
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
        dt: str = self.gEntregas.get_date()
        if self.dtEnt != dt:
            if dt in self.gEntregas.resumos:
                self.gEntregas.set_text(self.gEntregas.resumos[dt])
            else:
                self.gEntregas.set_resumo(dt, manager.cadastro.get_data(manager.cadastro.get_col("entrega"), dt))
                self.gEntregas.set_text(self.gEntregas.res)
                if not self.gEntregas.btCopiarTxt.isEnabled():
                    self.gEntregas.btCopiarTxt.setEnabled(True)
            self.dtEnt = dt
        del dt

    ## Método: ação do botão OK da área de Dados
    def on_ok_dados(self) -> None:
        dt: str = self.gDados.get_date()
        if self.dtDados != dt:
            arq = manager.cadastro.get_dados(manager.cadastro.get_col("sage"), dt)
            arq['belga'] = self.gDados.set_belga(manager.cadastro.get_dados(manager.cadastro.get_col("belga"), dt))
            self.gDados.set_resumo(arq)
            self.dtDados = dt
            del arq
        del dt

    ## Método: Ação do menu "Conectar com planilha"
    def on_conectar_planilha(self) -> None:
        dlg = _DialogConectarPlanilha(self)
        if dlg.exec() != QDialog.DialogCode.Accepted:
            return

        sheet_id = _extract_sheet_id(dlg.link)
        if not sheet_id:
            GuiPopup().show_popup(errors.C005)
            return

        try:
            manager.connect(sheet_id)
        except PermissionError:
            GuiPopup().show_popup(errors.C004)
            return

        nome = self._resolve_nome(dlg.nome, sheet_id)
        if nome is None:
            return
        self._save_sheet(nome, sheet_id)

        if sheet_id not in self._sheet_actions:
            self._add_planilha_menu(nome, sheet_id)
        else:
            self._sheet_actions[sheet_id].setText(nome)

        self._update_planilha_check(sheet_id)
        GuiPopup().show_popup(errors.planilha_conectada(nome), "I")

        self.gEntregas.btAttAtiv.setEnabled(True)
        self.gEntregas.set_text(strings.TXT_ATIVAR_INSTRUCAO)

        self.gProdutos.btAttAtiv.setEnabled(True)
        self.gProdutos.set_text(strings.TXT_ATIVAR_INSTRUCAO)

        self.gDados.btAttAtiv.setEnabled(True)

    ## Método: Adiciona uma planilha ao submenu como item checkable
    def _add_planilha_menu(self, nome: str, sheet_id: str) -> None:
        act = QAction(nome, self)
        act.setCheckable(True)
        act.triggered.connect(lambda _, sid=sheet_id: self._on_selecionar_planilha(sid))
        self.mnPlanilhasConectadas.addAction(act)
        self._sheet_actions[sheet_id] = act

    ## Método: Marca a planilha ativa com checkmark e desmarca as demais
    def _update_planilha_check(self, sheet_id: str) -> None:
        for sid, act in self._sheet_actions.items():
            act.setChecked(sid == sheet_id)

    ## Método: Seleciona uma planilha já salva pelo submenu
    def _on_selecionar_planilha(self, sheet_id: str) -> None:
        try:
            manager.connect(sheet_id)
        except PermissionError:
            GuiPopup().show_popup(errors.C004)
            return
        self._update_planilha_check(sheet_id)
        nome = self._sheet_actions[sheet_id].text()
        GuiPopup().show_popup(errors.planilha_conectada(nome), "I")
        self.gEntregas.btAttAtiv.setEnabled(True)
        self.gEntregas.set_text(strings.TXT_ATIVAR_INSTRUCAO)
        self.gProdutos.btAttAtiv.setEnabled(True)
        self.gProdutos.set_text(strings.TXT_ATIVAR_INSTRUCAO)
        self.gDados.btAttAtiv.setEnabled(True)

    ## Método: Resolve o nome da planilha — detecta duplicata e oferece renomear.
    ## Retorna None se o usuário cancelar no fluxo de duplicata.
    def _resolve_nome(self, nome_digitado: str, sheet_id: str) -> str | None:
        sheets = self._load_sheets()
        existing = next((s for s in sheets if s['sheet_id'] == sheet_id), None)
        if existing:
            msg = strings.DLG_PLANILHA_EXISTENTE_MSG.format(nome=existing['nome'])
            resp = QMessageBox.question(
                self, strings.DLG_PLANILHA_EXISTENTE_TITULO, msg,
                QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.No,
            )
            if resp != QMessageBox.StandardButton.Yes:
                return None
            novo, ok = QInputDialog.getText(
                self, strings.DLG_RENOMEAR_TITULO, strings.DLG_RENOMEAR_MSG,
                text=existing['nome'],
            )
            return novo.strip() if ok and novo.strip() else existing['nome']
        return nome_digitado or sheet_id

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

    ## Método: Carrega planilhas salvas do cache local
    @staticmethod
    def _load_sheets() -> list:
        return _sheets_cache.retrieve(_SHEETS_KEY) or []

    ## Método: Salva planilha conectada no cache local (cria ou atualiza nome)
    @staticmethod
    def _save_sheet(nome: str, sheet_id: str) -> None:
        sheets = GuiMain._load_sheets()
        for s in sheets:
            if s['sheet_id'] == sheet_id:
                s['nome'] = nome
                break
        else:
            sheets.append({'nome': nome, 'sheet_id': sheet_id})
        _sheets_cache.save(sheets, _SHEETS_KEY)
