"""Área de entregas pendentes: resumo diário com inadimplências."""

from pandas.core.frame import DataFrame
from pandas.core.series import Series
from PyQt6.QtCore import QDate, Qt
from PyQt6.QtWidgets import QDateEdit, QHBoxLayout, QSizePolicy, QVBoxLayout

from maria_cacau.assets import strings
from maria_cacau.core import errors
from maria_cacau.core.charts import ChartType, ChartWidget
from maria_cacau.design_system.aux_widgets import AuxWidgets
from maria_cacau.design_system.gui_popup import GuiPopup


class GuiEntregas(AuxWidgets):
    ## Construtor
    def __init__(self) -> None:
        super().__init__()

        self.root = self.group_box("Entregas")

        self.resumos: dict = {}
        self.res: str = ''

        self.popup: GuiPopup = GuiPopup()

        self.setup_ui()

    ## Método: cria e configura a janela
    def setup_ui(self) -> None:
        mainLayout = QVBoxLayout(self.root)

        contentLayout = QHBoxLayout()
        self.txt = self.text_view()
        self.set_text(strings.TXT_OK_INSTRUCAO_ENTREGAS)
        contentLayout.addWidget(self.txt, stretch=3)
        self.chart = ChartWidget(ChartType.PIE)
        contentLayout.addWidget(self.chart, stretch=2)
        mainLayout.addLayout(contentLayout)

        btnLayout = QHBoxLayout()
        btnLayout.setAlignment(Qt.AlignmentFlag.AlignVCenter)

        self.dts = QDateEdit(QDate.currentDate())
        self.dts.setDisplayFormat("dd/MM/yy")
        self.dts.setCalendarPopup(True)
        self.dts.setSizePolicy(QSizePolicy.Policy.Minimum, QSizePolicy.Policy.Fixed)

        self.btOk = self.bts(strings.BTN_OK)
        self.dts.setFixedHeight(self.btOk.sizeHint().height())

        btnLayout.addWidget(self.dts)
        btnLayout.addWidget(self.btOk)

        self.btCopiarTxt = self.bts(strings.BTN_COPIAR)
        self.btCopiarTxt.setEnabled(False)
        self.btCopiarTxt.clicked.connect(lambda: self.on_copy(self.txt))
        btnLayout.addWidget(self.btCopiarTxt)

        self.btDownload = self.bts(strings.BTN_DOWNLOAD)
        self.btDownload.setEnabled(False)
        btnLayout.addWidget(self.btDownload)

        btnLayout.addStretch()

        self.btCopiarGrafico = self.bts(strings.BTN_COPIAR)
        self.btCopiarGrafico.setEnabled(False)
        self.btCopiarGrafico.clicked.connect(self.chart.copy_to_clipboard)
        btnLayout.addWidget(self.btCopiarGrafico)

        self.btSalvarGrafico = self.bts(strings.BTN_SALVAR)
        self.btSalvarGrafico.setEnabled(False)
        self.btSalvarGrafico.clicked.connect(self.chart.save_to_file)
        btnLayout.addWidget(self.btSalvarGrafico)

        mainLayout.addLayout(btnLayout)

    ## Método especial: retorna a data selecionada no formato DD/MM/YY
    def get_date(self) -> str:
        return self.dts.date().toString('dd/MM/yy')

    ## Método especial: define o texto da área de resumo
    def set_text(self, t_: str) -> None:
        self.txt.setText(t_)

    ## Método: gera e exibe o resumo das entregas do dia
    def set_resumo(self, d_: str, arq_: DataFrame) -> None:
        if d_ in self.resumos:
            self.res = self.resumos[d_]
            return

        try:
            quant: Series = arq_['modalidade'].value_counts()
            tipo: list = quant.index.tolist()

            entregas = ''
            for x in range(len(quant)):
                entregas += f'\n{tipo[x]} = {quant.iloc[x]}'

            pag: Series = arq_['quanto\nfalta\npagar?']

            dev = ''
            for x in range(len(pag)):
                if pag[x] < 0 and arq_['modalidade'][x] != 'FABRICA':
                    dev += '\n{} -> {} | {} | {} | $: {}\n'.format(
                        arq_['pedido'][x], arq_['destinatário'][x],
                        arq_['modalidade'][x], arq_['tel'][x], pag[x])

            self.res = f'Para o dia {self.fix_date(d_)} temos: {sum(quant)} pedido(s)\n{entregas}\n\n'
            if dev == '':
                self.res += 'Sem nenhuma pendência!'
            else:
                self.res += f'Falta(m) pagar:\n{dev}'

            self.resumos[d_] = self.res
            self.chart.update_data(dict(quant), title='Entregas')
            self.btCopiarGrafico.setEnabled(True)
            self.btSalvarGrafico.setEnabled(True)

        except Exception:
            self.popup.show_popup(errors.E001)
