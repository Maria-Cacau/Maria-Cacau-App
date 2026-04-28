"""Área de entregas pendentes: resumo diário com inadimplências."""

from pandas.core.frame import DataFrame
from pandas.core.series import Series
from PyQt6.QtWidgets import QHBoxLayout, QVBoxLayout

from maria_cacau.assets import strings
from maria_cacau.core import errors
from maria_cacau.design_system.aux_widgets import AuxWidgets
from maria_cacau.design_system.gui_popup import GuiPopup


class GuiEntregas(AuxWidgets):
    ## Construtor: define a super classe e também o grupo
    def __init__(self) -> None:
        super().__init__()

        self.root = self.group_box("Entregas")                                          # Cria o Group Box

        self.setup_ui()                                                                 # Chama o método de construção da GUI
        self.set_enabled(False)                                                         # Deixa 90% desativada

        self.popup:GuiPopup = GuiPopup()                                                # Objeto instanciado pra gerar as janelas

        self.datas:dict = {}                                                            # Datas que são mostradas pro usuário
        self.resumos:dict = {}                                                          # MEMOIZATION: os resumos já feitos são guardados

        self.res:str = ''                                                               # Resumo gerado
        self.col:list = []                                                              # Colunas que vão ser usadas

    ## Método: cria e configura a janela
    def setup_ui(self) -> None:
        mainLayout = QVBoxLayout(self.root)

        contentLayout = QHBoxLayout()

        self.txt = self.text_view()
        self.set_text(strings.TXT_SEM_PLANILHA)
        contentLayout.addWidget(self.txt, stretch=3)

        contentLayout.addWidget(self.graph_view(), stretch=2)
        mainLayout.addLayout(contentLayout)

        btnLayout = QHBoxLayout()

        self.btAttAtiv = self.bts("Ler planilha")
        btnLayout.addWidget(self.btAttAtiv)

        btnLayout.addWidget(self.bts("Download"))                                       # v5.0: inativo

        self.btCopiarTxt = self.bts("Copiar")
        self.btCopiarTxt.setEnabled(False)
        self.btCopiarTxt.clicked.connect(lambda: self.on_copy(self.txt))
        btnLayout.addWidget(self.btCopiarTxt)

        self.dts = self.combo_box()
        btnLayout.addWidget(self.dts)

        self.btOk = self.bts("OK")
        btnLayout.addWidget(self.btOk)
        mainLayout.addLayout(btnLayout)

    ## Método: deixa os widgets ativado/desativado
    def set_enabled(self, b_:bool) -> None:
        self.txt.setEnabled(b_)
        self.dts.setEnabled(b_)
        self.btOk.setEnabled(b_)

    ## Método: ação do botão Ativar (Ler planilha)
    def on_ativar(self) -> None:
        self.set_enabled(True)
        self.set_text(strings.TXT_OK_INSTRUCAO_ENTREGAS)
        self.btAttAtiv.setText(strings.BTN_ATUALIZAR)
        self.btAttAtiv.setEnabled(False)                                                # v5.0: Modo atualizar indisponível

    ## Método especial: Define o arquivo que vai ser usado
    def get_date(self) -> str: return self.datas[self.dts.currentText()]

    ## Método especial: Define as datas
    def set_dates(self, d_:dict) -> None:
        for x in d_: self.datas[self.fix_date(str(x)[0:10])] = x
        self.dts.addItems(sorted(self.datas.keys()))
        del x

    ## Método especial: define o texto
    def set_text(self, t_:str) -> None: self.txt.setText(t_)

    ## Método especial: Define as colunas que vão ser usadas
    def set_cols(self, c_:list) -> None: self.col = c_

    ## Método: Cria o resumo pela análise dos dados
    def set_resumo(self, d_:str, arq_:DataFrame):
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

            self.res = f'Para o dia {self.fix_date(d_)} temos: {sum(quant)} pedido(s)\n{entregas}\n\n'
            if dev == '': self.res += "Sem nenhuma pendência!"
            else: self.res += f"Falta(m) pagar:\n{dev}"

            self.resumos[d_] = self.res
            del quant, tipo, entregas, pag, dev, x

        except Exception:
            self.popup.show_popup(errors.E001)
