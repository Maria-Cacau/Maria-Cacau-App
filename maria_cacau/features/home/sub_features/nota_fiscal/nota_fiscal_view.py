######    Gui Reis   -   guisreis25@gmail.com    ######    COPYRIGHT © 2020 KINGS

# -*- coding: utf-8 -*-

## Classe responsável pela criação da área Dados

#    Nessa classe é feito a criação da Interface Gráfica da área "Dados" e também
# a análise e filtragem feita dentro da planilha.


from pandas.core.frame import DataFrame
from PyQt6.QtCore import Qt
from PyQt6.QtWidgets import QHBoxLayout, QTabWidget, QVBoxLayout, QWidget

from maria_cacau.design_system.aux_frames import AuxFrame
## Bibliotecas necessárias:
from maria_cacau.design_system.aux_widgets import AuxWidgets


class Gui_Dados(AuxWidgets):
    ## Construtor: define a super classe e também o grupo
    def __init__(self) -> None:
        super(Gui_Dados, self).__init__()

        self.root = self.gBox("Dados")                                                                  # Cria o Group Box

        self.frSage:dict = {}                                                                           # Atributo: Guarda os frames em Notas SAGE
        self.frEnvio:dict = {}                                                                          # Atributo: Guarda os frames em Melhor Envio

        self.datas:dict = {}                                                                            # Datas que são mostradas pro usuário

        self.infos:dict = {}                                                                            # Atributo: Guarda as informações pra Nota SAGE e Melhor envio
        self.allInfos:dict = {}                                                                         # Atributo: Guarda os dicionários que já foram criados [MEMOIZATION]

        self.max:int = 0                                                                                # Atributo: Define o número máximo de páginas para os resumo
        self.trad:dict = {}                                                                             # Atributo: Faz a tradução das labels da GUI com a da planilha

        self.contSage:int = 0                                                                           # Atributo: Contador das páginas em Notas SAGE
        self.contEnvio:int = 0                                                                          # Atributo: Contador das páginas em Melhor envio

        self.gui_Ui()
        self.setWidEnable(False)

    ## Destruidor: desaloca os atributos declarados
    def __del__(self) -> None:
        del self.root, self.tabDados, self.tabNotasSage, self.tabMelhorEnvio
        del self.datas, self.infos, self.allInfos, self.max, self.trad, self.contEnvio, self.contSage
        del self.frSage, self.frEnvio, self.btAttAtiv, self.dts, self.btOk, self.lbCont, self.btAnte, self.btProx

    ## Método: cria e configura a janela
    def gui_Ui(self) -> None:
        mainLayout = QVBoxLayout(self.root)

        ## Abas:
        self.tabDados = QTabWidget()
        self.tabDados.setLayoutDirection(Qt.LayoutDirection.RightToLeft)

        self.tabNotasSage = QWidget()
        self.tabDados.addTab(self.tabNotasSage, "NOTA - SAGE")
        self.criaFrame(self.frSage, self.tabNotasSage,
            ["NOME", "CPF", "EMAIL", "CEP", "RUA", "COMPL", "BAIRRO", "CIDADE", "FRETE", "TOTAL", "BELGA?", "PEDIDO", "ENTREGA"])

        self.tabMelhorEnvio = QWidget()
        self.tabDados.addTab(self.tabMelhorEnvio, "Melhor Envio")
        self.criaFrame(self.frEnvio, self.tabMelhorEnvio,
            ["NOME", "TEL", "EMAIL", "CEP", "RUA", "COMPL", "BAIRRO", "CIDADE", "CPF", "PEDIDO", "ENTREGA"])

        self.tabDados.currentChanged.connect(self.mudarTab_Action)
        mainLayout.addWidget(self.tabDados)

        ## Botões:
        btnLayout = QHBoxLayout()

        self.btAttAtiv = self.bts("Ler planilha")
        btnLayout.addWidget(self.btAttAtiv)

        self.dts = self.cBox()
        btnLayout.addWidget(self.dts)

        self.btOk = self.bts("OK")
        btnLayout.addWidget(self.btOk)

        self.lbCont = self.lbl("00/00", 11)
        self.lbCont.setAlignment(Qt.AlignmentFlag.AlignCenter)
        btnLayout.addWidget(self.lbCont)

        self.btAnte = self.bts("<")
        self.btAnte.clicked.connect(lambda: self.btProxAnte_action(-1))
        self.btAnte.setEnabled(False)
        btnLayout.addWidget(self.btAnte)

        self.btProx = self.bts(">")
        self.btProx.clicked.connect(lambda: self.btProxAnte_action(1))
        self.btProx.setEnabled(False)
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
        self.setWidEnable(True)
        self.btAttAtiv.setText("Atualizar")
        self.btAttAtiv.setEnabled(False)                                                                # v5.0: Modo atualizar indisponível

    ## Método: ação de quando muda de aba
    def mudarTab_Action(self) -> None:
        if (self.max != 0):
            if (self.tabDados.currentIndex() == 0): self.condBt(self.contSage)
            else: self.condBt(self.contEnvio)

    ## Método: verifica onde e qual botão vai fazer a ação
    def btProxAnte_action(self, soma_:int) -> None:
        if (self.tabDados.currentIndex() == 0): self.contSage = self.btAcao(self.contSage, self.frSage, soma_)
        else: self.contEnvio = self.btAcao(self.contEnvio, self.frEnvio, soma_)

    ## Método: Faz a real ação dos botões de avançar e voltar
    def btAcao(self, cont_:int, tab_:dict, soma_:int) -> int:
        cont_ += soma_
        self.mudaPag(tab_, cont_)
        self.condBt(cont_)
        return cont_

    ## Método: Arruma a data de (aaaa-mm-dd) para (dd/mm/aaaa)
    def fixDate(self, d_:str) -> str: return "/".join(reversed(d_.split("-")))

    ## Método especial: Retorna a data escolhida
    def getDta(self) -> str: return self.datas[self.dts.currentText()]

    ## Método: Define as datas
    def setDta(self, d_:dict) -> None:
        for x in d_.keys(): self.datas[self.fixDate(str(x)[0:10])] = x
        self.dts.addItems(sorted(self.datas.keys()))
        del x

    ## Método especial: Define as colunas que vão ser usadas
    def setTrad(self, ori_:list, lbl_:list) -> None: self.trad = {lbl_[x]:ori_[x] for x in range(14)}

    ## Método especial: Cria a coluna "Belga"
    def setBelga(self, arq_:DataFrame) -> list:
        return list(map(lambda x: 'Sim' if 'BELGA' in str(set(arq_.loc[x])) else 'Não', range(len(arq_))))

    ## Método: Pega as informações e coloca pra vizualização
    def setResumo(self, arq_:DataFrame) -> None:
        fret:list = list(arq_["$FRETE"])
        tot:list = list(arq_["TOTAL"])
        self.max = len(tot)

        if (self.getDta() in self.allInfos.keys()): self.infos = self.allInfos[self.getDta()]
        else:
            cols:list = list(arq_.columns)
            self.infos = {cols[x]:list(arq_[cols[x]]) for x in range(len(cols))}
            self.infos["TOTAL"] = [str(round(tot[x] - fret[x])) for x in range(self.max)]
            self.allInfos[self.getDta()] = self.infos
            del cols

        self.contSage, self.contEnvio = 0, 0

        self.mudaPag(self.frEnvio, self.contEnvio)
        self.condBt(self.contEnvio)

        self.mudaPag(self.frSage, self.contSage)
        self.condBt(self.contSage)

        del fret, tot

    ## Método: Pega as informações novas quando muda de página
    def mudaPag(self, d_:dict, c_:int) -> None:
        for x in d_.keys(): d_[x].setText(str(self.infos[self.trad[x]][c_]))

    ## Método: Verifica se os botões ficam inativos ou não caso chegam nos limites
    def condBt(self, cont_:int) -> None:
        if (cont_+1 == self.max): self.btProx.setEnabled(False)
        else: self.btProx.setEnabled(True)

        if (cont_ == 0): self.btAnte.setEnabled(False)
        else: self.btAnte.setEnabled(True)

        self.lbCont.setText(f"{cont_+1}/{self.max}")

    ## Método: Cria as linhas onde são colocados as informações de Melhor Envio e Nota Sage
    def criaFrame(self, d_:dict, tab_:QWidget, l_:list) -> None:
        tabLayout = QVBoxLayout(tab_)

        headerLayout = QHBoxLayout()
        headerLayout.addWidget(self.lbl("PEDIDO", 10))
        d_["PEDIDO"] = self.lbl("", 11)
        headerLayout.addWidget(d_["PEDIDO"])
        headerLayout.addStretch()
        headerLayout.addWidget(self.lbl("ENTREGA", 10))
        lb = self.lbl("", 10)
        lb.setAlignment(Qt.AlignmentFlag.AlignRight)
        d_["ENTREGA"] = lb
        headerLayout.addWidget(lb)
        tabLayout.addLayout(headerLayout)

        for x in range(len(l_)-2):
            frame = AuxFrame(l_[x])
            d_[l_[x]] = frame
            tabLayout.addWidget(frame)
