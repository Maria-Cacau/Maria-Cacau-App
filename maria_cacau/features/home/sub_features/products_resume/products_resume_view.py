"""Área de resumo de produtos: contagem de itens por período."""

from pandas.core.frame import DataFrame
from PyQt6.QtCore import QDate
from PyQt6.QtGui import QFont
from PyQt6.QtWidgets import QDateEdit, QHBoxLayout, QSizePolicy, QVBoxLayout

from maria_cacau.assets import strings
from maria_cacau.design_system.aux_widgets import AuxWidgets


class GuiProdutos(AuxWidgets):
    ## Construtor
    def __init__(self) -> None:
        super().__init__()

        self.root = self.group_box("Produtos")

        self.naValues: list = ['0.0', 'nan', '0', '-']

        self.pedInd: dict = {}
        self.pedDia: dict = {}
        self.pedGeral: dict = {}

        self.res: str = ''

        self.setup_ui()

    ## Método: cria e configura a janela
    def setup_ui(self) -> None:
        mainLayout = QVBoxLayout(self.root)

        self.txt = self.text_view()
        self.set_text(strings.TXT_OK_INSTRUCAO_PRODUTOS)
        mainLayout.addWidget(self.txt, stretch=3)

        btnLayout = QHBoxLayout()

        periodoLayout = QHBoxLayout()
        periodoLayout.setSpacing(4)
        periodoLayout.setContentsMargins(0, 0, 0, 0)

        periodoLayout.addWidget(self.lbl(strings.LBL_PERIODO, 12))

        today = QDate.currentDate()
        week_start = today.addDays(-(today.dayOfWeek() - 1))
        week_end   = today.addDays(7 - today.dayOfWeek())

        self.dtsStart = QDateEdit(week_start)
        self.dtsStart.setDisplayFormat("dd/MM/yy")
        self.dtsStart.setCalendarPopup(True)
        self.dtsStart.setSizePolicy(QSizePolicy.Policy.Minimum, QSizePolicy.Policy.Fixed)
        periodoLayout.addWidget(self.dtsStart)

        periodoLayout.addWidget(self.lbl("-", 12))

        self.dtsEnd = QDateEdit(week_end)
        self.dtsEnd.setDisplayFormat("dd/MM/yy")
        self.dtsEnd.setCalendarPopup(True)
        self.dtsEnd.setSizePolicy(QSizePolicy.Policy.Minimum, QSizePolicy.Policy.Fixed)
        periodoLayout.addWidget(self.dtsEnd)

        self.btOk = self.bts(strings.BTN_OK)
        self.dtsStart.setFixedHeight(self.btOk.sizeHint().height())
        self.dtsEnd.setFixedHeight(self.btOk.sizeHint().height())

        btnLayout.addLayout(periodoLayout)
        btnLayout.addWidget(self.btOk)

        btnLayout.addStretch()

        self.btDownload = self.bts(strings.BTN_DOWNLOAD)
        self.btDownload.setEnabled(False)
        btnLayout.addWidget(self.btDownload)

        self.btCopiarTxt = self.bts(strings.BTN_COPIAR)
        self.btCopiarTxt.setEnabled(False)
        self.btCopiarTxt.clicked.connect(lambda: self.on_copy(self.txt))
        btnLayout.addWidget(self.btCopiarTxt)

        mainLayout.addLayout(btnLayout)

        mainLayout.addWidget(self.graph_view(), stretch=2)

        btnLayout2 = QHBoxLayout()
        btnLayout2.addStretch()
        btnLayout2.addWidget(self.bts(strings.BTN_COPIAR))   # v5.0: inativo
        btnLayout2.addWidget(self.bts(strings.BTN_SALVAR))   # v5.0: inativo
        mainLayout.addLayout(btnLayout2)

        copyright = self.lbl("v5.0 (02/21)\nCOPYRIGHT © 2020 KINGS", 8)
        copyright.setFont(QFont('Arial', 8, 75))
        mainLayout.addWidget(copyright)

    ## Método especial: retorna o intervalo de datas selecionado no formato DD/MM/YY
    def get_date_range(self) -> tuple[str, str]:
        return (
            self.dtsStart.date().toString('dd/MM/yy'),
            self.dtsEnd.date().toString('dd/MM/yy'),
        )

    ## Método especial: define o texto
    def set_text(self, t_: str) -> None:
        self.txt.setText(t_)

    #### ANÁLISE NA PLANILHA ####

    ## Método: Adiciona no dicionário somando os valores que ja existe
    def add_to_dict(self, k_: str, v_: int, d1_: dict) -> None:
        if k_ not in d1_: d1_[k_] = v_
        else: d1_[k_] += v_

    ## Método: Junta as colunas de produtos (e as quantidade deles) em um dicionário
    def merge_cols(self, l_: list) -> None:
        if str(l_[-1]) not in self.naValues:
            self.add_to_dict(l_[-1], 1, self.pedInd)
            self.add_to_dict(l_[-1], 1, self.pedDia)
            self.add_to_dict(l_[-1], 1, self.pedGeral)

        for p in range(0, 14, 2):
            if str(l_[p]) in self.naValues: break
            self.add_to_dict(l_[p+1], int(l_[p]), self.pedInd)
            self.add_to_dict(l_[p+1], int(l_[p]), self.pedDia)
            self.add_to_dict(l_[p+1], int(l_[p]), self.pedGeral)
        del p

    ## Método: arruma identação do texto
    def format_num(self, n_: int) -> str:
        if n_ < 10: return f'   {n_}'
        elif n_ < 100: return f'  {n_}'
        elif n_ < 1000: return f' {n_}'
        else: return f'{n_}'

    ## Método: Pega o dicionário e coloca em string ("key -> value")
    def dict_to_str(self, d_: dict, s_: str = '') -> str:
        for x in sorted(d_): s_ += f"{self.format_num(d_[x])} -> {x}\n"
        del x
        return s_

    ## Método: Cria o resumo de cada pedido
    def resumo_pedido(self, i_: int, arq_: DataFrame) -> None:
        for l in range(i_):
            dia = f"\n\nPedido: {arq_['pedido'][l]} | {arq_['modalidade'][l]} | {arq_['tel'][l]}\n"
            self.merge_cols(list(arq_.loc[l].iloc[4:19]))
            dia += self.dict_to_str(self.pedInd)
            self.pedInd = {}
            self.res += dia
        del l, dia

    ## Método: Cria o resumo do dia
    def resumo_dia(self, d_: str, i_: int, arq_: DataFrame) -> str:
        self.res += f"\n\n\n>> Dia {self.fix_date(d_)} - {i_} pedido(s)"
        self.resumo_pedido(i_, arq_)
        return self.dict_to_str(self.pedDia)

    ## Método: Cria o resumo geral (do período)
    def set_resumo(self, start_: str, end_: str, total_: int, dia_: str) -> None:
        pulaLin = "\n\n" + "-"*55
        self.res = (
            f"Entre {self.fix_date(start_)} e {self.fix_date(end_)} há {total_} pedido(s)\n"
            + self.dict_to_str(self.pedGeral)
            + pulaLin + dia_ + pulaLin + self.res
        )
        self.set_text(self.res)
        del pulaLin
