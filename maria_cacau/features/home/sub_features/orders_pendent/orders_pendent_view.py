######    Gui Reis   -   guisreis25@gmail.com    ######    COPYRIGHT © 2020 KINGS

# -*- coding: utf-8 -*-

## Classe responsável pela criação da área Entregas

#    Essa classe é responsável pela interface gráfica + toda
# a parte lógica.


## Bibliotecas necessárias:
from maria_cacau.design_system.aux_widgets import AuxWidgets
from maria_cacau.design_system.gui_popup import Gui_popup

from PyQt6.QtWidgets import QVBoxLayout, QHBoxLayout

from pandas.core.frame import DataFrame
from pandas.core.series import Series


class Gui_Entregas(AuxWidgets):
    ## Construtor: define a super classe e também o grupo
    def __init__(self) -> None:
        super(Gui_Entregas, self).__init__()

        self.root = self.gBox("Entregas")                                               # Cria o Group Box

        self.gui_Ui()                                                                   # Chama o método de construção da GUI
        self.setWidEnable(False)                                                        # Deixa 90% desativada

        self.popup:Gui_popup = Gui_popup()                                              # Objeto instanciado pra gerar as janelas

        self.datas:dict = {}                                                            # Datas que são mostradas pro usuário
        self.resumos:dict = {}                                                          # MEMOIZATION: os resumos já feitos são guardados

        self.res:str = ''                                                               # Resumo gerado
        self.col:list = []                                                              # Colunas que vão ser usadas

    ## Destruidor: desaloca os atributos declarados
    def __del__(self) -> None:
        del self.col, self.res
        del self.popup, self.datas, self.resumos
        del self.txt, self.btAttAtiv, self.btCopiarTxt, self.btOk

    ## Método: cria e configura a janela
    def gui_Ui(self) -> None:
        mainLayout = QVBoxLayout(self.root)

        contentLayout = QHBoxLayout()

        self.txt = self.txtView()
        self.setTxt('Nenhuma planilha foi seleciona.')
        contentLayout.addWidget(self.txt, stretch=3)

        contentLayout.addWidget(self.graphView(), stretch=2)
        mainLayout.addLayout(contentLayout)

        btnLayout = QHBoxLayout()

        self.btAttAtiv = self.bts("Ler planilha")
        btnLayout.addWidget(self.btAttAtiv)

        btnLayout.addWidget(self.bts("Download"))                                       # v5.0: inativo

        self.btCopiarTxt = self.bts("Copiar")
        self.btCopiarTxt.setEnabled(False)
        self.btCopiarTxt.clicked.connect(lambda: self.btCopiar_action(self.txt))
        btnLayout.addWidget(self.btCopiarTxt)

        self.dts = self.cBox()
        btnLayout.addWidget(self.dts)

        self.btOk = self.bts("OK")
        btnLayout.addWidget(self.btOk)
        mainLayout.addLayout(btnLayout)


    ## Método: deixa os widgets ativado/desativado
    def setWidEnable(self, b_:bool) -> None:
        self.txt.setEnabled(b_)
        self.dts.setEnabled(b_)
        self.btOk.setEnabled(b_)

    ## Método: ação do botão Ativar (Ler planilha)
    def btAtiv_action(self) -> None:
        self.setWidEnable(True)
        self.setTxt('Escolha uma data e pressione "OK" para gerar o resumo das entregas.')
        self.btAttAtiv.setText("Atualizar")
        self.btAttAtiv.setEnabled(False)                                                # v5.0: Modo atualizar indisponível

    ## Método especial: Define o arquivo que vai ser usado
    def getDta(self) -> str: return self.datas[self.dts.currentText()]

    ## Método especial: Define as datas
    def setDta(self, d_:dict) -> None:
        for x in d_.keys(): self.datas[self.fixDate(str(x)[0:10])] = x
        self.dts.addItems(sorted(self.datas.keys()))
        del x

    ## Método especial: define o texto
    def setTxt(self, t_:str) -> None: self.txt.setText(t_)

    ## Método especial: Define as colunas que vão ser usadas
    def setCol(self, c_:list) -> None: self.col = c_

    ## Método: Arruma a data de (aaaa-mm-dd) para (dd/mm/aaaa)
    def fixDate(self, d_:str) -> str: return "/".join(reversed(d_.split("-")))

    ## Método: Cria o resumo pela análise dos dados
    def setResumo(self, d_:str, arq_:DataFrame):
        try:
            quant:Series = arq_[self.col[2]].value_counts()
            tipo:list = quant.index.tolist()

            entregas:str = ''
            for x in range(len(quant)): entregas += f'\n{tipo[x]} = {quant[x]}'

            pag:Series = arq_[self.col[4]]

            dev:str = ''
            for x in range(len(pag)):
                if pag[x] < 0 and arq_[self.col[2]][x] != 'FABRICA':
                    dev += '\n{} -> {} | {} | {} | $: {}\n'.format(
                    arq_[self.col[0]][x], arq_[self.col[1]][x], arq_[self.col[2]][x], arq_[self.col[3]][x], arq_[self.col[4]][x])

            self.res = f'Para o dia {self.fixDate(d_)} temos: {sum(quant)} pedido(s)\n{entregas}\n\n'
            if (dev == ''): self.res += "Sem nenhuma pendência!"
            else: self.res += f"Falta(m) pagar:\n{dev}"

            self.resumos[d_] = self.res
            del quant, tipo, entregas, pag, dev, x

        except:
            txts = ["Erro inesperado","Erro na leitura do arquivo",
            'Um erro inesperado aconteceu. Contate algúem do suporte técnico.\n\nCódigo do erro: E001']
            self.popup.show_PopUp(txts)
            del txts
