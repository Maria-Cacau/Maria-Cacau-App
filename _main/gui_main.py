######    Gui Reis   -   guisreis25@gmail.com    ######    COPYRIGHT © 2020 KINGS

# -*- coding: utf-8 -*-

## Classe responsável pela criação da janela princial


## Bibliotecas necessárias:
# Arquivo local:
## Interfaces:
from guiProdutos import Gui_Produtos
from guiEntregas import Gui_Entregas
from guiDados import Gui_Dados
from guiValidacao import Gui_ValiCpf
from guiConsulta import Gui_ConsFrete

## Ações:
from analisePlan import Analise

# GUI:
from PyQt6.QtWidgets import QMainWindow, QWidget, QMenuBar, QMenu, QFileDialog, QApplication, QHBoxLayout, QVBoxLayout
from PyQt6.QtGui import QIcon, QAction


class Gui_main(QMainWindow):
    ## Construtor: Cria a janela principal com o menu e o local onde vai ser colocado as páginas
    def __init__(self) -> None:
        super(Gui_main, self).__init__()

        self.setWindowIcon(QIcon('images/logo-icone.png'))                                                              # Define o ícone
        self.setWindowTitle("Maria Cacau - Consulta")                                                                   # Define o título da janela
        self.setStyleSheet("QMainWindow{background: rgb(235, 230, 215);}")                                              # Define a cor de fundo

        tamTela = QApplication.primaryScreen().availableGeometry()                                                      # Pega as dimensões da tela atual
        self.setMinimumSize(tamTela.width()-300, tamTela.height()-200)                                                  # Define o tamanho mínimo da tela
        self.showMaximized()                                                                                            # Tela inicia maximizada

        self.menubar = QMenuBar(self)                                                                                   # Cria a área de menu
        self.setMenuBar(self.menubar)                                                                                   # Define como menu da janela

        ## Objetos instaciados da GUI
        self.gProdutos = Gui_Produtos()
        self.gEntregas = Gui_Entregas()
        self.gDados = Gui_Dados()
        self.gVeriCpf = Gui_ValiCpf()
        self.gConsCep = Gui_ConsFrete()

        ## Layout principal
        root = QWidget()
        self.setCentralWidget(root)

        mainLayout = QHBoxLayout(root)
        mainLayout.addWidget(self.gProdutos.root, stretch=3)                                                            # Coluna esquerda: Produtos

        rightLayout = QVBoxLayout()
        rightLayout.addWidget(self.gEntregas.root, stretch=3)                                                           # Linha superior direita: Entregas

        bottomLayout = QHBoxLayout()
        bottomLayout.addWidget(self.gDados.root, stretch=4)                                                             # Linha inferior centro: Dados

        farRightLayout = QVBoxLayout()
        farRightLayout.addWidget(self.gVeriCpf.root)                                                                   # Coluna direita: Validação CPF
        farRightLayout.addWidget(self.gConsCep.root)                                                                   # Coluna direita: Consulta Frete
        bottomLayout.addLayout(farRightLayout, stretch=3)

        rightLayout.addLayout(bottomLayout, stretch=4)
        mainLayout.addLayout(rightLayout, stretch=7)

        ## Objetos instaciados de ações
        self.aAna = Analise()

        self.gui_Ui()

        self.datas:dict = {}                                                                                            # Atributo: Guarda as datas e a quantidade de pedidos de cada uma

        self.dtEnt:str = ''                                                                                             # Atributo: Guarda a última data usada na área de Entregas
        self.dtDados:str = ''                                                                                           # Atributo: Guarda a última data usada na área de Dados

        del tamTela, self.gVeriCpf, self.gConsCep


    ## Destruidor: desaloca os atributos declarados
    def __del__(self) -> None:
        del self.gProdutos, self.gEntregas, self.gDados
        del self.aAna, self.datas, self.dtEnt, self.dtDados

    ## Método: configura a interface
    def gui_Ui(self) -> None:
    ## ------------------------------------------------------------------------------------------------
    ## Barra do menu:
        ## Arquivo:
        self.mnConfig = QMenu("Arquivo", self.menubar)                                                                  # Cria o menu de configuração
        self.menubar.addAction(self.mnConfig.menuAction())                                                              # Add na área do menu

        self.actLerPlan = QAction("Ler planílha", self)                                                                 # Cria uma ação
        self.mnConfig.addAction(self.actLerPlan)                                                                        # Add no menu de configuração
        self.actLerPlan.triggered.connect(self.btLerPlan_action)                                                        # Ação do botão

        ## Ajuda:
        self.mnAjuda = QMenu("Ajuda" ,self.menubar)                                                                     # Cria o menu de editar
        self.menubar.addAction(self.mnAjuda.menuAction())                                                               # Add na área do menu

        self.actSobre = QAction("Sobre", self)                                                                          # Cria uma ação
        self.mnAjuda.addAction(self.actSobre)                                                                           # Add no menu de editar
        # self.actSobre.triggered.connect()

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
        dia:str = ''                                                                                                    # Var. temp: Guarda o resumo diário
        for d in sorted(self.datas.keys()):
            dia += f"\n\nDia {self.gProdutos.fixDate(d[:10])} - {self.datas[d]} pedido(s)\n"                            # "Título" do dia
            dia += self.gProdutos.pedidosDia(d, self.datas[d], self.aAna.getArq(self.aAna.getCol("Produtos"),d))        # Add os pedidos diários
            self.gProdutos.pedDia = {}                                                                                  # Limpa o dicionário para colocar outro dia

        self.gProdutos.setResumo(dia)                                                                                   # Gera o resumo
        self.gProdutos.btCopiarTxt.setEnabled(True)                                                                     # Ativa o botão "Copiar"
        self.gProdutos.btOk.setEnabled(False)                                                                           # Desativa o botão "OK"
        del dia, d                                                                                                      # Deleta as variáveis do sistema

    ## Método: ação do botão "OK" da área de Entregas
    def btOk_actionEnt(self) -> None:
        dt:str = self.gEntregas.getDta()                                                                                # Pega a data escolhida
        if (self.dtEnt != dt):                      # Evita de fazer a análise de novo caso não tenha mudado a data
            if (dt in self.gEntregas.resumos.keys()): self.gEntregas.setTxt(self.gEntregas.resumos[dt])                 # Memoization
            else:
                self.gEntregas.setResumo(dt, self.aAna.getArq(self.aAna.getCol("Entrega"),dt))                          # Gera o resumo
                self.gEntregas.txt.setText(self.gEntregas.res)                                                          # Coloca na vizualização
                if (not self.gEntregas.btCopiarTxt.isEnabled()):                                                        # A partir da primeira vez
                    self.gEntregas.btCopiarTxt.setEnabled(True)                                                         # Deixa o botão copiar disponível
            self.dtEnt = dt                                                                                             # Atualiza a nova data usada
        del dt

    ## Método: ação do botão OK da área de Dados
    def btOk_actionDados(self) -> None:
        dt:str = self.gDados.getDta()                                                                                   # Pega a data escolhida
        if (self.dtDados != dt):                    # Evita de fazer a análise de novo caso não tenha mudado a data
            arq = self.aAna.getArqDados(self.aAna.getCol("Sage"), dt)                                                   # Cria o arquivo
            arq['Belga'] = self.gDados.setBelga(self.aAna.getArqDados(self.aAna.getCol("Belga"), dt))                   # Add a coluna "Belga"
            self.gDados.setResumo(arq)                                                                                  # Cria o resumo
            self.dtDados = dt                                                                                           # Atualiza a nova data usada
            del arq
        del dt

    ## Método: Ação do botão "Ler planilha"
    def btLerPlan_action(self) -> None:
        if ("Ler planilha" == self.gDados.btAttAtiv.text()):
            locArq:tuple = QFileDialog.getOpenFileName(self, "Escolha o arquivo Excel padronizado")                     # Abre a janela pra escolher o arquivo
            if (self.aAna.setArq(locArq[0])):
                self.datas = self.aAna.getDts()                                                                         # Define as datas

                ## Define as configurações da área de Entregas
                self.gEntregas.setCol(self.aAna.getCol("Entrega"))                                                      # Define as colunas que vão ser usadas
                self.gEntregas.setDta(self.datas)                                                                       # Define as datas
                self.gEntregas.btAttAtiv.clicked.connect(self.gEntregas.btAtiv_action)                                  # Muda a ação do botão
                self.gEntregas.btAttAtiv.setText("Ativar")                                                              # Muda o texto
                self.gEntregas.setTxt('Pressiona "ativar" para desbloquear essa área.')                                 # Explica como ativar a área

                ## Define as configurações da área de produtos
                self.gProdutos.setDta(self.datas)                                                                       # Define as datas
                self.gProdutos.btAttAtiv.clicked.connect(self.gProdutos.btAtiv_action)                                  # Muda a ação do botão
                self.gProdutos.btAttAtiv.setText("Ativar")                                                              # Muda o texto
                self.gProdutos.setTxt('Pressiona "ativar" para desbloquear essa área.')                                 # Explica como ativar a área

                ## Define as configurações da área de dados
                self.gDados.setDta(self.datas)                                                                          # Define as datas
                self.gDados.setTrad(self.aAna.getCol("gSage"), self.aAna.getCol("gLbl"))                                # Define as colunas equivalentes
                self.gDados.btAttAtiv.clicked.connect(self.gDados.btAtiv_action)                                        # Muda a ação do botão
                self.gDados.btAttAtiv.setText("Ativar")                                                                 # Muda o texto

                ## Desativa a leitura da planilha da barra de menu
                self.actLerPlan.setEnabled(False)
            del locArq
