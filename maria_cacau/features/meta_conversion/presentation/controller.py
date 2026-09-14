"""Controller da feature Meta Conversion: conecta signals da view ao ViewModel e trata respostas."""

from datetime import datetime
from zoneinfo import ZoneInfo

from maria_cacau.assets import strings
from maria_cacau.core.error import ErrorModel
from maria_cacau.core.observability import observability
from maria_cacau.design_system.components import DSDialogModel

from ..domain.events import FeatureEvents as ObsEv
from ..domain.models import ConversionOrderModel
from ..domain.signals import signals
from .view import MetaConversionView
from .viewmodel import MetaConversionViewModel

# Mesmo fuso do backend: a janela de 7 dias é contada no horário da loja, não no da máquina.
_TIMEZONE = ZoneInfo("America/Sao_Paulo")


class MetaConversionController:
    def __init__(self) -> None:
        self.view      = MetaConversionView()
        self.viewmodel = MetaConversionViewModel()
        self._number: str | None = None
        self._setup_actions()

    def _setup_actions(self) -> None:
        self.view.search_requested.connect(self.on_search)
        self.view.send_requested.connect(self.on_send)

        signals.order_loaded.connect(self.handle_order_loaded)
        signals.order_failed.connect(self.handle_order_failed)
        signals.sent.connect(self.handle_sent)
        signals.send_failed.connect(self.handle_send_failed)

    ## Ações

    def on_search(self) -> None:
        number = self.view.get_number().strip()
        if not number:
            return
        observability.log(ObsEv.SEARCH_ACTION)
        self.view.prepare_search()
        self.viewmodel.search(number)

    def on_send(self) -> None:
        if not self._number:
            return
        observability.log(ObsEv.SEND_ACTION)
        self.view.prepare_send()
        self.viewmodel.send(self._number)

    ## Respostas

    def handle_order_loaded(self, order: ConversionOrderModel) -> None:
        # O número devolvido pelo backend já vem completo (`26512` → `26512,0`) — é ele que vai no envio.
        self._number = order.number
        self.view.show_order(order, order.state(datetime.now(_TIMEZONE).date()))

    def handle_order_failed(self, error: ErrorModel) -> None:
        self._number = None
        self.view.show_placeholder()
        self._show_error(error)

    def handle_sent(self) -> None:
        self.view.show_sent(datetime.now().strftime("%d/%m/%Y"))
        observability.log(ObsEv.SENT, order=self._number)

    def handle_send_failed(self, error: ErrorModel) -> None:
        self.view.finish_send_error()
        self._show_error(error)

    def _show_error(self, error: ErrorModel) -> None:
        observability.log(ObsEv.ERROR, code=error.code, dev_message=error.dev_message)
        # A mensagem técnica fica só no log. O código vai no texto principal, e não só no título, porque
        # o macOS não exibe o título da janela em QMessageBox.
        title = strings.DLG_META_ERRO_TITULO.format(code=error.code)
        self.view.popup.show(DSDialogModel(title=title, message=title, detail=error.user_message))
