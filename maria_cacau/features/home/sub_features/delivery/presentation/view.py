"""View da feature Delivery: resumo diário de entregas e pagamentos pendentes."""

from PyQt6.QtCore import pyqtSignal
from PyQt6.QtWidgets import QHBoxLayout, QVBoxLayout, QWidget

from maria_cacau.assets import strings
from maria_cacau.design_system.components import (DSButton, DSButtonState,
                                                  DSChart, DSChartType,
                                                  DSDateInput, DSDialog,
                                                  DSGroupBox, DSTextView)

from ..domain.models import DeliveryViewData


class DeliveryView(QWidget):
    generate_report = pyqtSignal()
    copy_report     = pyqtSignal()
    copy_graph      = pyqtSignal()
    download_graph  = pyqtSignal()

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

    def _setup_components(self) -> None:
        self.popup    = DSDialog()
        self.textView = DSTextView()
        self.textView.setText(strings.TXT_OK_INSTRUCAO_ENTREGAS)

        self.chart = DSChart(DSChartType.PIE)

        self.butGenerate = DSButton(strings.BTN_OK)
        self.butGenerate.clicked.connect(self.generate_report)

        self.dateSelector = DSDateInput()
        self.dateSelector.setFixedHeight(self.butGenerate.sizeHint().height())

        self.butCopyData = DSButton(strings.BTN_COPIAR)
        self.butCopyData.clicked.connect(self.textView.copy_to_clipboard)
        self.butCopyData.clicked.connect(self.copy_report)

        self.butCopyGraph = DSButton(strings.BTN_COPIAR)
        self.butCopyGraph.clicked.connect(self.chart.copy_to_clipboard)
        self.butCopyGraph.clicked.connect(self.copy_graph)

        self.butSaveGraph = DSButton(strings.BTN_SALVAR)
        self.butSaveGraph.clicked.connect(self.chart.save_to_file)
        self.butSaveGraph.clicked.connect(self.download_graph)

    def _setup_layout(self) -> None:
        self.root = DSGroupBox(self.view_title)
        mainLayout = QVBoxLayout(self.root)

        mainLayout.addWidget(self.textView, stretch=3)

        btnLayout = QHBoxLayout()
        btnLayout.addWidget(self.dateSelector)
        btnLayout.addWidget(self.butGenerate)
        btnLayout.addStretch()
        btnLayout.addWidget(self.butCopyData)
        mainLayout.addLayout(btnLayout)

        mainLayout.addWidget(self.chart, stretch=2)

        btnGraphLayout = QHBoxLayout()
        btnGraphLayout.addStretch()
        btnGraphLayout.addWidget(self.butCopyGraph)
        btnGraphLayout.addWidget(self.butSaveGraph)
        mainLayout.addLayout(btnGraphLayout)

    ## MARK: - Private

    def _update_buttons_state(self, enabled: bool) -> None:
        self.butCopyData.setEnabled(enabled)
        self.butCopyGraph.setEnabled(enabled)
        self.butSaveGraph.setEnabled(enabled)

    ## MARK: - Public

    def get_date(self) -> str:
        return self.dateSelector.date().toString('dd/MM/yy')

    def update_data(self, data: DeliveryViewData) -> None:
        self.textView.setText(data.report)
        self.chart.update_data(data.chart_data, title=self.view_title)
        self._update_buttons_state(True)
        self.activate_button_state()

    def activate_button_state(self) -> None:
        self.butGenerate.update_state(DSButtonState.DEFAULT)

    def clear_content(self) -> None:
        self.textView.setText(strings.TXT_OK_INSTRUCAO_ENTREGAS)
        self.chart.clear()
        self._update_buttons_state(False)

    def prepare_to_fetch(self) -> None:
        self.clear_content()
        self.butGenerate.update_state(DSButtonState.LOADING)
