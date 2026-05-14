"""Área de entregas pendentes: resumo diário com inadimplências."""

from typing import Any

from pandas.core.frame import DataFrame
from pandas.core.series import Series
from PyQt6.QtCore import QDate, Qt, pyqtSignal
from PyQt6.QtWidgets import QDateEdit, QHBoxLayout, QSizePolicy, QVBoxLayout

from maria_cacau.assets import strings
from maria_cacau.core.charts import ChartType, ChartWidget
from maria_cacau.design_system.aux_widgets import AuxWidgets
from maria_cacau.design_system.gui_popup import GuiPopup

from .models import OrdersModel


class OrdersView(AuxWidgets):
    generate_report = pyqtSignal()
    copy_report = pyqtSignal()
    download_report = pyqtSignal()
    copy_graph = pyqtSignal()
    download_graph = pyqtSignal()

    ## Init
    def __init__(self) -> None:
        super().__init__()
        self._setup_ui()

    @property
    def view_title(self) -> str:
        return "Entregas"
    
    def _setup_ui(self) -> None:
        self._setup_components()
        self._setup_layout()

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
        btnLayout.addWidget(self.butDownloadData)
        btnLayout.addStretch()
        btnLayout.addWidget(self.butCopyGraph)
        btnLayout.addWidget(self.butSaveGraph)
        mainLayout.addLayout(btnLayout)
    
    def _setup_components(self) -> None:
        self.popup = GuiPopup()

        self.textView = self.text_view()
        self.textView.setText(strings.TXT_OK_INSTRUCAO_ENTREGAS)
        
        self.chart = ChartWidget(ChartType.PIE)

        self.butGenerate = self.bts(strings.BTN_OK)

        self.dateSelector = QDateEdit(QDate.currentDate())
        self.dateSelector.setDisplayFormat("dd/MM/yy")
        self.dateSelector.setCalendarPopup(True)
        self.dateSelector.setSizePolicy(QSizePolicy.Policy.Minimum, QSizePolicy.Policy.Fixed)
        self.dateSelector.setFixedHeight(self.butGenerate.sizeHint().height())
        
        self.butCopyData = self.bts(strings.BTN_COPIAR)
        self.butCopyData.setEnabled(False)
        self.butCopyData.clicked.connect(lambda: self.on_copy(self.textView))

        self.butDownloadData = self.bts(strings.BTN_DOWNLOAD)
        self.butDownloadData.setEnabled(False)
        
        self.butCopyGraph = self.bts(strings.BTN_COPIAR)
        self.butCopyGraph.setEnabled(False)
        self.butCopyGraph.clicked.connect(self.chart.copy_to_clipboard)
        
        self.butSaveGraph = self.bts(strings.BTN_SALVAR)
        self.butSaveGraph.setEnabled(False)
        self.butSaveGraph.clicked.connect(self.chart.save_to_file)

    ## MARK: - Public methods
    def get_date(self) -> str:
        r'''Retorna a data selecionada no formato DD/MM/YY'''
        return self.dateSelector.date().toString('dd/MM/yy')

    def update_data(self, data: OrdersModel) -> None:
        r'''Atualiza os dados da view'''
        self.textView.setText(data.report)

        self.chart.update_data(dict(data.chartData), title=self.view_title)
        self.butCopyGraph.setEnabled(True)
        self.butSaveGraph.setEnabled(True)