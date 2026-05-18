"""View da feature Summary: resumo de produtos por período."""

from PyQt6.QtCore import QDate, pyqtSignal
from PyQt6.QtWidgets import (QDateEdit, QHBoxLayout, QSizePolicy, QVBoxLayout,
                             QWidget)

from maria_cacau.assets import strings
from maria_cacau.core.charts import ChartType, ChartWidget
from maria_cacau.design_system.aux_widgets import AuxWidgets
from maria_cacau.design_system.gui_popup import GuiPopup

from ..domain.models import ProductsViewData


class SummaryView(QWidget, AuxWidgets):
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
        self.popup = GuiPopup()

        self.textView = self.text_view()
        self.textView.setText(strings.TXT_OK_INSTRUCAO_PRODUTOS)

        self.chart = ChartWidget(ChartType.BAR)

        today      = QDate.currentDate()
        week_start = today.addDays(-(today.dayOfWeek() - 1))
        week_end   = today.addDays(7 - today.dayOfWeek())

        self.dateStart = QDateEdit(week_start)
        self.dateStart.setDisplayFormat("dd/MM/yy")
        self.dateStart.setCalendarPopup(True)
        self.dateStart.setSizePolicy(QSizePolicy.Policy.Minimum, QSizePolicy.Policy.Fixed)

        self.dateEnd = QDateEdit(week_end)
        self.dateEnd.setDisplayFormat("dd/MM/yy")
        self.dateEnd.setCalendarPopup(True)
        self.dateEnd.setSizePolicy(QSizePolicy.Policy.Minimum, QSizePolicy.Policy.Fixed)

        self.butGenerate = self.bts(strings.BTN_OK)
        self.butGenerate.clicked.connect(self.generate_report)

        self.dateStart.setFixedHeight(self.butGenerate.sizeHint().height())
        self.dateEnd.setFixedHeight(self.butGenerate.sizeHint().height())

        self.butCopyReport = self.bts(strings.BTN_COPIAR)
        self.butCopyReport.clicked.connect(lambda: self.on_copy(self.textView))
        self.butCopyReport.clicked.connect(self.copy_report)

        self.cbChartType = self.combo_box()
        self.cbChartType.addItems([strings.CHART_TYPE_BAR, strings.CHART_TYPE_PIE])
        self.cbChartType.currentIndexChanged.connect(self._on_chart_type_changed)

        self.butCopyGraph = self.bts(strings.BTN_COPIAR)
        self.butCopyGraph.clicked.connect(self.chart.copy_to_clipboard)
        self.butCopyGraph.clicked.connect(self.copy_graph)

        self.butSaveGraph = self.bts(strings.BTN_SALVAR)
        self.butSaveGraph.clicked.connect(self.chart.save_to_file)
        self.butSaveGraph.clicked.connect(self.download_graph)

    def _setup_layout(self) -> None:
        self.root = self.group_box(self.view_title)
        mainLayout = QVBoxLayout(self.root)

        mainLayout.addWidget(self.textView, stretch=3)

        btnLayout = QHBoxLayout()
        periodoLayout = QHBoxLayout()
        periodoLayout.setSpacing(4)
        periodoLayout.setContentsMargins(0, 0, 0, 0)
        periodoLayout.addWidget(self.lbl(strings.LBL_PERIODO, 12))
        periodoLayout.addWidget(self.dateStart)
        periodoLayout.addWidget(self.lbl("-", 12))
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
        self.chart.set_type(ChartType.BAR if index == 0 else ChartType.PIE)
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
        self.butGenerate.setEnabled(True)

    def prepare_to_fetch(self) -> None:
        self.butGenerate.setEnabled(False)
