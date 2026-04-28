"""Área de resumo de produtos: contagem de itens por período."""

from pandas.core.frame import DataFrame
from PyQt6.QtGui import QFont
from PyQt6.QtWidgets import QHBoxLayout, QVBoxLayout

from maria_cacau.assets import strings
from maria_cacau.design_system.aux_widgets import AuxWidgets


class GuiProdutos(AuxWidgets):
    ## Construtor: define a super classe e também o grupo
    def __init__(self) -> None:
        super().__init__()

        self.root = self.group_box("Produtos")                                          # Atributo: Cria o Group Box

        self.setup_ui()                                                                 # Chama o método de construção da GUI
        self.set_enabled(False)                                                         # Deixa os botões inativos

        self.arq:DataFrame = None                                                       # Atributo: guarda o arquivo

        self.dts:dict = {}                                                              # Atributo: guarda as datas
        self.naValues:list = ['0.0', 'nan', '0', '-']                                  # Atributo: strings que identificam produtos/quantidades que não existem

        self.pedInd:dict = {}                                                           # Atributo: produtos de um pedido
        self.pedDia:dict = {}                                                           # Atributo: produtos do dia
        self.pedGeral:dict = {}                                                         # Atributo: produtos do período todo

        self.res:str = ''                                                               # Atributo: Texto a ser exibido

    ## Método: cria e configura a janela
    def setup_ui(self) -> None:
        mainLayout = QVBoxLayout(self.root)

        ## Vizualização do texto:
        self.txt = self.text_view()
        self.set_text(strings.TXT_SEM_PLANILHA)
        mainLayout.addWidget(self.txt, stretch=3)

        ## Botões texto:
        btnLayout = QHBoxLayout()
        self.btAttAtiv = self.bts(strings.BTN_ATIVAR)
        btnLayout.addWidget(self.btAttAtiv)

        btnLayout.addWidget(self.bts("Download"))                                       # v5.0: inativo

        self.btCopiarTxt = self.bts("Copiar")
        self.btCopiarTxt.setEnabled(False)
        self.btCopiarTxt.clicked.connect(lambda: self.on_copy(self.txt))
        btnLayout.addWidget(self.btCopiarTxt)

        self.btOk = self.bts("OK")
        btnLayout.addWidget(self.btOk)
        mainLayout.addLayout(btnLayout)

        ## Gráfico:
        mainLayout.addWidget(self.graph_view(), stretch=2)

        ## Botões gráfico:
        btnLayout2 = QHBoxLayout()
        btnLayout2.addStretch()
        btnLayout2.addWidget(self.bts("Copiar"))                                        # v5.0: inativo
        btnLayout2.addWidget(self.bts("Salvar"))                                        # v5.0: inativo
        mainLayout.addLayout(btnLayout2)

        ## Copyrights:
        copyright = self.lbl("v5.0 (02/21)\nCOPYRIGHT © 2020 KINGS", 8)
        copyright.setFont(QFont('Arial', 8, 75))
        mainLayout.addWidget(copyright)

    ## Método: ação do botão Ativar (Ler planilha)
    def on_ativar(self):
        self.set_enabled(True)
        self.set_text(strings.TXT_OK_INSTRUCAO_PRODUTOS)
        self.btAttAtiv.setText(strings.BTN_ATUALIZAR)
        self.btAttAtiv.setEnabled(False)                                                # v5.0: Modo atualizar indisponível

    ## Método: deixa os widgets ativado/desativado
    def set_enabled(self, b_:bool) -> None:
        self.txt.setEnabled(b_)
        self.btOk.setEnabled(b_)

    ## Método especial: define o texto
    def set_text(self, t_:str) -> None: self.txt.setText(t_)

    #### ANÁLISE NA PLANILHA ####

    ## Método especial: Define as datas que vão ser usadas
    def set_dates(self, d_:dict) -> None: self.dts = d_

    ## Método especial: Define o arquivo que vai ser usado
    def set_file(self, arq_:DataFrame) -> None: self.arq = arq_

    ## Método: Adiciona no dicionário somando os valores que ja existe
    def add_to_dict(self, k_:str, v_:int, d1_:dict) -> None:
        if k_ not in d1_: d1_[k_] = v_
        else: d1_[k_] += v_

    ## Método: Junta as colunas de produtos (e as quantidade deles) em um dicionário
    def merge_cols(self, l_:list) -> None:
        if str(l_[-1]) not in self.naValues:
            self.add_to_dict(l_[-1],1,self.pedInd)
            self.add_to_dict(l_[-1],1,self.pedDia)
            self.add_to_dict(l_[-1],1,self.pedGeral)

        for p in range(0,14,2):
            if str(l_[p]) in self.naValues: break
            self.add_to_dict(l_[p+1],int(l_[p]),self.pedInd)
            self.add_to_dict(l_[p+1],int(l_[p]),self.pedDia)
            self.add_to_dict(l_[p+1],int(l_[p]),self.pedGeral)
        del p

    ## Método: arruma identação do texto
    def format_num(self, n_:int) -> str:
        if n_ < 10: return f'   {n_}'
        elif n_< 100: return f'  {n_}'
        elif n_ < 1000: return f' {n_}'
        else: return f'{n_}'

    ## Método: Pega o dicionário e coloca em string ("key -> value")
    def dict_to_str(self, d_:dict, s_:str= '') -> str:
        for x in sorted(d_): s_ += f"{self.format_num(d_[x])} -> {x}\n"
        del x
        return s_

    ## Método: Cria o resumo de cada pedido
    def resumo_pedido(self, i_:int, arq_:DataFrame) -> None:
        for l in range(i_):
            dia = f"\n\nPedido: {arq_['pedido'][l]} | {arq_['modalidade'][l]} | {arq_['tel'][l]}\n"
            self.merge_cols(list(arq_.loc[l].iloc[4:19]))
            dia += self.dict_to_str(self.pedInd)
            self.pedInd = {}
            self.res += dia
        del l, dia

    ## Método: Cria o resumo do dia
    def resumo_dia(self, d_:str, i_:int, arq_:DataFrame) -> None:
        self.res += f"\n\n\n>> Dia {self.fix_date(d_)} - {i_} pedido(s)"
        self.resumo_pedido(i_, arq_)
        return self.dict_to_str(self.pedDia)

    ## Método: Cria o resumo geral (do período)
    def set_resumo(self, dia_:str):
        keys:list = sorted(self.dts.keys())
        pulaLin = "\n\n" + "-"*55

        self.res = f"Entre {self.fix_date(keys[0])} e {self.fix_date(keys[-1])} há {sum(self.dts.values())} pedido(s)\n" + self.dict_to_str(self.pedGeral) + pulaLin + dia_ + pulaLin + self.res
        self.set_text(self.res)
        del keys, pulaLin
