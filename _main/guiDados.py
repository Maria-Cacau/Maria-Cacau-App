######    Gui Reis   -   guisreis25@gmail.com    ######    COPYRIGHT © 2020 KINGS

# -*- coding: utf-8 -*-

## Classe responsável pela criação da área Dados

#    Nessa classe é feito a criação da Interface Gráfica da área "Dados" e também
# a análise e filtragem feita dentro da planilha.


## Bibliotecas necessárias:
# Arquivo local:
from auxFrames import AuxWidgets, AuxFrame

# Análise da planilha:
from pandas.core.frame import DataFrame

# GUI:
from PyQt6.QtWidgets import QWidget, QTabWidget, QVBoxLayout, QHBoxLayout
from PyQt6.QtCore import Qt


class Gui_Dados(AuxWidgets):
    ## Construtor: define a super classe e também o grupo
    def __init__(self) -> None:
        super(Gui_Dados, self).__init__()

        self.root = self.gBox("Dados")                                                              # Cria o Group Box

        self.frSage:dict = {}                                                                       # Atributo: Guarda os frames em Notas SAGE
        self.frEnvio:dict = {}                                                                      # Atributo: Guarda os frames em Melhor Envio

        self.datas:dict = {}                                                                        # Datas que são mostradas pro usuário

        self.infos:dict = {}                                                                        # Atributo: Guarda as informações pra Nota SAGE e Melhor envio
        self.allInfos:dict = {}                                                                     # Atributo: MEMOIZATION

        self.max:int = 0                                                                            # Atributo: Define o número máximo de páginas
        self.trad:dict = {}                                                                         # Atributo: Faz a tradução das labels da GUI com a da planilha

        self.contSage:int = 0                                                                       # Atributo: Contador das páginas em Notas SAGE
        self.contEnvio:int = 0                                                                      # Atributo: Contador das páginas em Melhor envio

        self.gui_Ui()                                                                               # Chama o método de construção da GUI
        self.setWidEnable(False)

    ## Destruidor: desaloca os atributos declarados
    def __del__(self) -> None:
        del self.root, self.tabDados, self.tabNotasSage, self.tabMelhorEnvio
        del self.datas, self.infos, self.allInfos, self.max, self.trad, self.contEnvio, self.contSage
        del self.frSage, self.frEnvio, self.btAttAtiv, self.dts, self.btOk, self.lbCont, self.btAnte, self.btProx


    ## Método: cria e configura a janela
    def gui_Ui(self) -> None:
        mainLayout = QVBoxLayout(self.root)

        ## -----------------------------------------------------------------------------------------------
        ## Dados:
        self.tabDados = QTabWidget()                                                                # Cria a área com as abas
        self.tabDados.setLayoutDirection(Qt.LayoutDirection.RightToLeft)                            # Define a direção das abas

        self.tabNotasSage = QWidget()                                                               # Cria uma aba
        self.tabDados.addTab(self.tabNotasSage, "NOTA - SAGE")                                      # Add a aba na área
        self.criaFrame(self.frSage, self.tabNotasSage,                                              # Add os frames na área
            ["NOME", "CPF", "EMAIL", "CEP", "RUA", "COMPL", "BAIRRO", "CIDADE", "FRETE", "TOTAL", "BELGA?", "PEDIDO", "ENTREGA"])

        self.tabMelhorEnvio = QWidget()                                                             # Cria uma aba
        self.tabDados.addTab(self.tabMelhorEnvio, "Melhor Envio")                                   # Add a aba na área
        self.criaFrame(self.frEnvio, self.tabMelhorEnvio,                                           # Add os frames na área
            ["NOME", "TEL", "EMAIL", "CEP", "RUA", "COMPL", "BAIRRO", "CIDADE", "CPF", "PEDIDO", "ENTREGA"])

        self.tabDados.currentChanged.connect(self.mudarTab_Action)                                  # Define a ação de quando muda de aba
        mainLayout.addWidget(self.tabDados)

        ## -----------------------------------------------------------------------------------------------
        ## Botões:
        btnLayout = QHBoxLayout()

        self.btAttAtiv = self.bts("Ler planilha")                                                   # Cria o botão
        btnLayout.addWidget(self.btAttAtiv)

        self.dts = self.cBox()                                                                      # Cria a área de opções das datas
        btnLayout.addWidget(self.dts)

        self.btOk = self.bts("OK")                                                                  # Cria o botão
        btnLayout.addWidget(self.btOk)

        self.lbCont = self.lbl("00/00", 11)                                                         # Cria a label
        self.lbCont.setAlignment(Qt.AlignmentFlag.AlignCenter)                                      # Define o alinhamento
        btnLayout.addWidget(self.lbCont)

        self.btAnte = self.bts("<")                                                                 # Cria o botão
        self.btAnte.clicked.connect(lambda: self.btProxAnte_action(-1))                             # Define a ação
        self.btAnte.setEnabled(False)                                                               # Deixa inativo
        btnLayout.addWidget(self.btAnte)

        self.btProx = self.bts(">")                                                                 # Cria o botão
        self.btProx.clicked.connect(lambda: self.btProxAnte_action(1))                              # Define a ação
        self.btProx.setEnabled(False)                                                               # Deixa inativo
        btnLayout.addWidget(self.btProx)

        mainLayout.addLayout(btnLayout)

    ## Método: deixa os widgets ativado/desativado
    def setWidEnable(self, b_:bool) -> None:
        self.tabDados.setEnabled(b_)
        self.dts.setEnabled(b_)
        self.btOk.setEnabled(b_)
        self.lbCont.setEnabled(b_)

    ## Método: ação do botão Ativar (Ler planilha)
    def btAtiv_action(self) -> None:
        self.setWidEnable(True)                                                                     # Ativa os botões inativos
        self.btAttAtiv.setText("Atualizar")                                                         # Muda o nome do botão
        self.btAttAtiv.setEnabled(False)                                                            # v5.0: Modo atualizar indisponível

    ## Método: ação de quando muda de aba
    def mudarTab_Action(self) -> None:
        if (self.max != 0):                                                                         # Se já tiver lido alguma planilha
            if (self.tabDados.currentIndex() == 0): self.condBt(self.contSage)                      # Att os botões e contadores pra cada área
            else: self.condBt(self.contEnvio)

    ## Método: verifica onde e qual botão vai fazer a ação
    def btProxAnte_action(self, soma_:int) -> None:
        if (self.tabDados.currentIndex() == 0): self.contSage = self.btAcao(self.contSage, self.frSage, soma_)
        else: self.contEnvio = self.btAcao(self.contEnvio, self.frEnvio, soma_)                     # Define onde vai ser a ação

    ## Método: Faz a real ação dos botões de avançar e voltar
    def btAcao(self, cont_:int, tab_:dict, soma_:int) -> int:
        cont_ += soma_                                                                              # Muda o contador pra página X
        self.mudaPag(tab_, cont_)                                                                   # Muda as informações
        self.condBt(cont_)                                                                          # Configura os botões e label
        return cont_

    ## Método: Arruma a data de (aaaa-mm-dd) para (dd/mm/aaaa)
    def fixDate(self, d_:str) -> str: return "/".join(reversed(d_.split("-")))

    ## Método especial: Retorna a data escolhida
    def getDta(self) -> str: return self.datas[self.dts.currentText()]

    ## Método: Define as datas
    def setDta(self, d_:dict) -> None:
        for x in d_.keys(): self.datas[self.fixDate(str(x)[0:10])] = x                              # Add no dicionário: {'dd/MM/aaaa':'aaaa-MM-dd'}
        self.dts.addItems(sorted(self.datas.keys()))                                                # Add na área de escolha das datas
        del x

    ## Método especial: Define as colunas que vão ser usadas
    def setTrad(self, ori_:list, lbl_:list) -> None: self.trad = {lbl_[x]:ori_[x] for x in range(14)}

    ## Método especial: Cria a coluna "Belga"
    def setBelga(self, arq_:DataFrame) -> list:
        return list(map(lambda x: 'Sim' if 'BELGA' in str(set(arq_.loc[x])) else 'Não', range(len(arq_))))

    ## Método: Pega as informações e coloca pra vizualização
    def setResumo(self, arq_:DataFrame) -> None:
        fret:list = list(arq_["$FRETE"])                                                            # Pega todos os fretes
        tot:list = list(arq_["TOTAL"])                                                              # Pega todos os totais
        self.max = len(tot)                                                                         # Define o máximo de páginas

        if (self.getDta() in self.allInfos.keys()): self.infos = self.allInfos[self.getDta()]
        else:
            cols:list = list(arq_.columns)                                                          # Pega as colunas
            self.infos = {cols[x]:list(arq_[cols[x]]) for x in range(len(cols))}                    # Cria um dicionário com as informações de cada coluna
            self.infos["TOTAL"] = [str(round(tot[x] - fret[x])) for x in range(self.max)]           # Att a coluna total (total-frete)
            self.allInfos[self.getDta()] = self.infos                                               # Add na MEMOIZATION
            del cols

        self.contSage, self.contEnvio = 0, 0                                                        # Deixa os contadores zerados

        self.mudaPag(self.frEnvio, self.contEnvio)                                                  # Coloca os dados a mostra
        self.condBt(self.contEnvio)                                                                 # Define os botões e a label

        self.mudaPag(self.frSage, self.contSage)                                                    # Coloca os dados a mostra
        self.condBt(self.contSage)                                                                  # Define os botões e a label

        del fret, tot

    ## Método: Pega as informações novas quando muda de página
    def mudaPag(self, d_:dict, c_:int) -> None:
        for x in d_.keys(): d_[x].setText(str(self.infos[self.trad[x]][c_]))                        # Acessa o dicionário com as informações de acordo com index da página

    ## Método: Verifica se os botões ficam inativos ou não caso chegam nos limites
    def condBt(self, cont_:int) -> None:
        if (cont_+1 == self.max): self.btProx.setEnabled(False)                                     # Botão próximo fica inativo se chegar no máximo
        else: self.btProx.setEnabled(True)

        if (cont_ == 0): self.btAnte.setEnabled(False)                                              # Botão anterior fica inativo se chegar no mínimo
        else: self.btAnte.setEnabled(True)

        self.lbCont.setText(f"{cont_+1}/{self.max}")                                                # Atualiza o contador na label

    ## Método: Cria as linhas onde são colocados as informações de Melhor Envio e Nota Sage
    def criaFrame(self, d_:dict, tab_:QWidget, l_:list) -> None:
        layout = QVBoxLayout(tab_)

        ## Cabeçalho: PEDIDO + ENTREGA
        headerLayout = QHBoxLayout()
        headerLayout.addWidget(self.lbl("PEDIDO", 10))
        d_["PEDIDO"] = self.lbl("", 11)
        headerLayout.addWidget(d_["PEDIDO"])
        headerLayout.addStretch()
        headerLayout.addWidget(self.lbl("ENTREGA", 10))
        d_["ENTREGA"] = self.lbl("", 10)
        d_["ENTREGA"].setAlignment(Qt.AlignmentFlag.AlignRight)
        headerLayout.addWidget(d_["ENTREGA"])
        layout.addLayout(headerLayout)

        ## Linhas de dados (todos exceto PEDIDO e ENTREGA que são os 2 últimos)
        for x in range(len(l_) - 2):
            frame = AuxFrame(l_[x])
            d_[l_[x]] = frame
            layout.addWidget(frame)

        layout.addStretch()
        del x
