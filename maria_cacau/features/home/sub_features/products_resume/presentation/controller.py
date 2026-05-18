"""Controller da feature Products Resume: conecta signals da view ao ViewModel e trata respostas."""

import time

from maria_cacau.core.error import ErrorModel
from maria_cacau.core.observability import observability

from ..domain.events import FeatureEvents as ObsEv
from ..domain.models import ProductsViewData
from ..domain.signals import signals
from .view import ProductsResumeView
from .viewmodel import ProductsResumeViewModel


class ProductsResumeController:
    def __init__(self) -> None:
        self.view = ProductsResumeView()
        self.viewmodel = ProductsResumeViewModel()
        self._setup_actions()

    def _setup_actions(self) -> None:
        self.view.generate_report.connect(self.on_generate_report)
        self.view.copy_report.connect(self.on_copy_report)
        self.view.copy_graph.connect(self.on_copy_graph)
        self.view.download_graph.connect(self.on_download_graph)
        self.view.change_chart_type.connect(self.on_change_chart_type)

        signals.report_generated.connect(self.handle_report_generated)
        signals.error.connect(self.handle_error)

    ## Ações de botões

    def on_generate_report(self) -> None:
        self._last_start, self._last_end = self.view.get_date_range()
        self.viewmodel.on_generate(self._last_start, self._last_end)
        self.view.prepare_to_fetch()
        self._start_time = time.time()
        observability.log(ObsEv.GENERATE_REPORT_ACTION)

    def on_copy_report(self) -> None:
        observability.log(ObsEv.COPY_REPORT_ACTION)

    def on_copy_graph(self) -> None:
        observability.log(ObsEv.COPY_GRAPH_ACTION)

    def on_download_graph(self) -> None:
        observability.log(ObsEv.DOWNLOAD_GRAPH_ACTION)

    def on_change_chart_type(self) -> None:
        observability.log(ObsEv.CHANGE_CHART_TYPE_ACTION)

    ## Respostas

    def handle_error(self, error: ErrorModel) -> None:
        self.view.popup.show(error.to_popup())
        self.view.butGenerate.setEnabled(True)

    def handle_report_generated(self, data: ProductsViewData) -> None:
        self.view.update_data(data)
        duration_s = round(time.time() - self._start_time, 1)
        observability.log(ObsEv.QUERY, start=self._last_start, end=self._last_end, duration_s=duration_s)
        self._start_time = None
