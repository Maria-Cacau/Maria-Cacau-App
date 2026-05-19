"""View da feature Summary: resumo de produtos por período."""

from PyQt6.QtCore import QDate, pyqtSignal
from PyQt6.QtWidgets import QHBoxLayout, QVBoxLayout, QWidget

from maria_cacau.assets import strings
from maria_cacau.design_system.components import (DSButton, DSButtonState,
                                                  DSChart, DSChartType,
                                                  DSComboBox, DSDateInput,
                                                  DSDialog, DSGroupBox,
                                                  DSLabel, DSTextView)

from ..domain.models import ProductsViewData


class SummaryView(QWidget):
    generate_report   = pyqtSignal()
    copy_report       = pyqtSignal()
    copy_graph        = pyqtSignal()
    download_graph    = pyqtSignal()
    change_chart_type = pyqtSignal()

    def __init__(self) -> None:
        super().__init__()
        self._setup_ui()

    @property
    def view_title(self) -> str:
        return "Produtos"

    ## MARK: - Life Cycle

    def _setup_ui(self) -> None:
        self._setup_components()
        self._setup_layout()
        self._update_buttons_state(False)

    def _setup_components(self) -> None:
        self.popup    = DSDialog()
        self.textView = DSTextView()
        self.textView.setText(strings.TXT_OK_INSTRUCAO_PRODUTOS)

        self.chart = DSChart(DSChartType.BAR)

        today      = QDate.currentDate()
        week_start = today.addDays(-(today.dayOfWeek() - 1))
        week_end   = today.addDays(7 - today.dayOfWeek())

        self.dateStart = DSDateInput(week_start)
        self.dateEnd   = DSDateInput(week_end)

        self.butGenerate = DSButton(strings.BTN_OK)
        self.butGenerate.clicked.connect(self.generate_report)

        self.dateStart.setFixedHeight(self.butGenerate.sizeHint().height())
        self.dateEnd.setFixedHeight(self.butGenerate.sizeHint().height())

        self.butCopyReport = DSButton(strings.BTN_COPIAR)
        self.butCopyReport.clicked.connect(self.textView.copy_to_clipboard)
        self.butCopyReport.clicked.connect(self.copy_report)

        self.cbChartType = DSComboBox()
        self.cbChartType.addItems([strings.CHART_TYPE_BAR, strings.CHART_TYPE_PIE])
        self.cbChartType.currentIndexChanged.connect(self._on_chart_type_changed)

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
        periodoLayout = QHBoxLayout()
        periodoLayout.setSpacing(4)
        periodoLayout.setContentsMargins(0, 0, 0, 0)
        periodoLayout.addWidget(DSLabel(strings.LBL_PERIODO, 12))
        periodoLayout.addWidget(self.dateStart)
        periodoLayout.addWidget(DSLabel("-", 12))
        periodoLayout.addWidget(self.dateEnd)
        btnLayout.addLayout(periodoLayout)
        btnLayout.addWidget(self.butGenerate)
        btnLayout.addStretch()
        btnLayout.addWidget(self.butCopyReport)
        mainLayout.addLayout(btnLayout)

        mainLayout.addWidget(self.chart, stretch=2)

        btnLayout2 = QHBoxLayout()
        btnLayout2.addWidget(self.cbChartType)
        btnLayout2.addStretch()
        btnLayout2.addWidget(self.butCopyGraph)
        btnLayout2.addWidget(self.butSaveGraph)
        mainLayout.addLayout(btnLayout2)

    ## MARK: - Private

    def _on_chart_type_changed(self, index: int) -> None:
        self.chart.set_type(DSChartType.BAR if index == 0 else DSChartType.PIE)
        self.change_chart_type.emit()

    def _update_buttons_state(self, enabled: bool) -> None:
        self.butCopyReport.setEnabled(enabled)
        self.cbChartType.setEnabled(enabled)
        self.butCopyGraph.setEnabled(enabled)
        self.butSaveGraph.setEnabled(enabled)

    ## MARK: - Public

    def get_date_range(self) -> tuple[str, str]:
        return (
            self.dateStart.date().toString("dd/MM/yyyy"),
            self.dateEnd.date().toString("dd/MM/yyyy"),
        )

    def update_data(self, data: ProductsViewData) -> None:
        self.textView.setText(data.report)
        self.chart.update_data(data.chart_data, title=self.view_title)
        self._update_buttons_state(True)
        self.activate_button_state()

    def activate_button_state(self) -> None:
        self.butGenerate.update_state(DSButtonState.DEFAULT)

    def clear_content(self) -> None:
        self.textView.setText(strings.TXT_OK_INSTRUCAO_PRODUTOS)
        self.chart.clear()
        self._update_buttons_state(False)

    def prepare_to_fetch(self) -> None:
        self.clear_content()
        self.butGenerate.update_state(DSButtonState.LOADING)
