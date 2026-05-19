"""View da feature Delivery: resumo diário de entregas e pagamentos pendentes."""

from PyQt6.QtCore import QDate, Qt, pyqtSignal
from PyQt6.QtWidgets import (QDateEdit, QHBoxLayout, QSizePolicy, QVBoxLayout,
                             QWidget)

from maria_cacau.assets import strings
from maria_cacau.core.charts import ChartType, ChartWidget
from maria_cacau.design_system.aux_widgets import AuxWidgets
from maria_cacau.design_system.components import DSButton
from maria_cacau.design_system.gui_popup import GuiPopup

from ..domain.models import DeliveryViewData


class DeliveryView(QWidget, AuxWidgets):
    generate_report = pyqtSignal()
    copy_report = pyqtSignal()
    copy_graph = pyqtSignal()
    download_graph = pyqtSignal()

    ## Init
    def __init__(self) -> None:
        super().__init__()
        self._setup_ui()

    @property
    def view_title(self) -> str:
        return "Entregas"

    ## MARK: - Life Cycle
    def _setup_ui(self) -> None:
        self._setup_components()
        self._setup_layout()
        self._update_buttons_state(False)

    def _setup_layout(self) -> None:
        self.root = self.group_box(self.view_title)
        mainLayout = QVBoxLayout(self.root)

        contentLayout = QHBoxLayout()
        contentLayout.addWidget(self.textView, stretch=3)
        contentLayout.addWidget(self.chart, stretch=2)
        mainLayout.addLayout(contentLayout)

        btnLayout = QHBoxLayout()
        btnLayout.setAlignment(Qt.AlignmentFlag.AlignVCenter)
        btnLayout.addWidget(self.dateSelector)
        btnLayout.addWidget(self.butGenerate)
        btnLayout.addWidget(self.butCopyData)
        btnLayout.addStretch()
        btnLayout.addWidget(self.butCopyGraph)
        btnLayout.addWidget(self.butSaveGraph)
        mainLayout.addLayout(btnLayout)

    def _setup_components(self) -> None:
        self.popup = GuiPopup()

        self.textView = self.text_view()
        self.textView.setText(strings.TXT_OK_INSTRUCAO_ENTREGAS)

        self.chart = ChartWidget(ChartType.PIE)

        self.butGenerate = DSButton(strings.BTN_OK)
        self.butGenerate.clicked.connect(self.generate_report)

        self.dateSelector = QDateEdit(QDate.currentDate())
        self.dateSelector.setDisplayFormat("dd/MM/yy")
        self.dateSelector.setCalendarPopup(True)
        self.dateSelector.setSizePolicy(QSizePolicy.Policy.Minimum, QSizePolicy.Policy.Fixed)
        self.dateSelector.setFixedHeight(self.butGenerate.sizeHint().height())

        self.butCopyData = DSButton(strings.BTN_COPIAR)
        self.butCopyData.clicked.connect(lambda: self.on_copy(self.textView))
        self.butCopyData.clicked.connect(self.copy_report)

        self.butCopyGraph = DSButton(strings.BTN_COPIAR)
        self.butCopyGraph.clicked.connect(self.chart.copy_to_clipboard)
        self.butCopyGraph.clicked.connect(self.copy_graph)

        self.butSaveGraph = DSButton(strings.BTN_SALVAR)
        self.butSaveGraph.clicked.connect(self.chart.save_to_file)
        self.butSaveGraph.clicked.connect(self.download_graph)
    
    ## MARK: - Others
    def _update_buttons_state(self, enabled: bool) -> None:
        self.butCopyData.setEnabled(enabled)
        self.butCopyGraph.setEnabled(enabled)
        self.butSaveGraph.setEnabled(enabled)

    ## MARK: - Public methods
    def get_date(self) -> str:
        r'''Retorna a data selecionada no formato DD/MM/YY'''
        return self.dateSelector.date().toString('dd/MM/yy')

    def update_data(self, data: DeliveryViewData) -> None:
        r'''Atualiza os dados da view'''
        self.textView.setText(data.report)
        self.chart.update_data(data.chart_data, title=self.view_title)
        self._update_buttons_state(True)
        self.activate_button_state()

    def activate_button_state(self) -> None:
        self.butGenerate.setEnabled(True)

    def clear_content(self) -> None:
        r'''Reseta o conteúdo da view para o estado inicial'''
        self.textView.setText(strings.TXT_OK_INSTRUCAO_ENTREGAS)
        self.chart.clear()
        self._update_buttons_state(False)

    def prepare_to_fetch(self) -> None:
        r'''Prepara a view para uma nova consulta'''
        self.clear_content()
        self.butGenerate.setEnabled(False)
