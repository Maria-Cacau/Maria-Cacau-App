"""View da feature Meta Conversion: dialog para buscar um pedido e enviá-lo à Meta."""

from PyQt6.QtCore import Qt, pyqtSignal
from PyQt6.QtWidgets import (QDialog, QFormLayout, QFrame, QHBoxLayout,
                             QVBoxLayout, QWidget)

from maria_cacau.assets import strings
from maria_cacau.design_system.components import (DSButton, DSButtonState,
                                                  DSDialog, DSGroupBox,
                                                  DSLabel, DSTextInput)
from maria_cacau.design_system.constants import DIALOG_MIN_WIDTH

from ..domain.models import (META_STATUS_SENT, ConversionOrderModel,
                             ConversionState)

_ORDER_FIELDS    = ("number", "customer", "total", "payment")
_CUSTOMER_FIELDS = ("phone", "email", "name", "zip", "city")


class MetaConversionView(QDialog):
    search_requested = pyqtSignal()
    send_requested   = pyqtSignal()

    _COLOR_OK      = '#388e3c'
    _COLOR_BLOCKED = '#C62828'
    _COLOR_WARNING = '#8a6d00'
    _COLOR_HINT    = 'gray'

    def __init__(self, parent=None) -> None:
        super().__init__(parent)
        self._setup_ui()

    @property
    def menu_title(self) -> str:
        return strings.ACT_META_CONVERSAO

    ## MARK: - Life Cycle

    def _setup_ui(self) -> None:
        self._setup_components()
        self._setup_layout()
        self.show_placeholder()

    def _setup_components(self) -> None:
        self.setWindowTitle(strings.DLG_META_TITULO)
        self.setMinimumWidth(DIALOG_MIN_WIDTH)

        self.popup = DSDialog()

        self._number_input = DSTextInput()
        self._number_input.setPlaceholderText(strings.DLG_META_PLACEHOLDER)
        self._number_input.returnPressed.connect(self.search_requested)

        self._btn_search = DSButton(strings.BTN_BUSCAR)
        self._btn_search.clicked.connect(self.search_requested)

        self._lbl_status = DSLabel("")
        self._lbl_status.setWordWrap(True)

        self._values = {key: DSLabel("") for key in _ORDER_FIELDS + _CUSTOMER_FIELDS}

        self._btn_close = DSButton(strings.BTN_FECHAR)
        self._btn_close.clicked.connect(self.close)

        self._btn_send = DSButton(strings.BTN_ENVIAR_META)
        self._btn_send.clicked.connect(self.send_requested)

        # Num QDialog, Enter no campo também clica o botão padrão — a busca sairia duas vezes.
        for button in (self._btn_search, self._btn_close, self._btn_send):
            button.setAutoDefault(False)

    def _setup_layout(self) -> None:
        order_box = DSGroupBox(strings.DLG_META_GRP_PEDIDO)
        order_layout = QHBoxLayout(order_box)
        order_layout.addWidget(DSLabel(strings.DLG_META_LBL_NUMERO))
        order_layout.addWidget(self._number_input)
        order_layout.addWidget(self._btn_search)

        labels = {
            "number":   strings.DLG_META_CAMPO_PEDIDO,
            "customer": strings.DLG_META_CAMPO_CLIENTE,
            "total":    strings.DLG_META_CAMPO_VALOR,
            "payment":  strings.DLG_META_CAMPO_PAGAMENTO,
            "phone":    strings.DLG_META_CAMPO_TELEFONE,
            "email":    strings.DLG_META_CAMPO_EMAIL,
            "name":     strings.DLG_META_CAMPO_NOME,
            "zip":      strings.DLG_META_CAMPO_CEP,
            "city":     strings.DLG_META_CAMPO_CIDADE,
        }

        separator = QFrame()
        separator.setFrameShape(QFrame.Shape.HLine)
        separator.setFrameShadow(QFrame.Shadow.Sunken)

        self._details = QWidget()
        details_layout = QVBoxLayout(self._details)
        details_layout.setContentsMargins(0, 0, 0, 0)
        details_layout.addLayout(self._form(_ORDER_FIELDS, labels))
        details_layout.addWidget(separator)
        details_layout.addLayout(self._form(_CUSTOMER_FIELDS, labels))

        status_box = DSGroupBox(strings.DLG_META_GRP_SITUACAO)
        status_layout = QVBoxLayout(status_box)
        status_layout.addWidget(self._lbl_status)
        status_layout.addWidget(self._details)

        footer = QHBoxLayout()
        footer.addStretch()
        footer.addWidget(self._btn_close)
        footer.addWidget(self._btn_send)

        layout = QVBoxLayout()
        layout.addWidget(order_box)
        layout.addWidget(status_box)
        layout.addLayout(footer)
        self.setLayout(layout)

    def _form(self, keys: tuple[str, ...], labels: dict[str, str]) -> QFormLayout:
        form = QFormLayout()
        # O padrão do macOS alinha rótulos à direita; fixado para ficar igual ao Windows.
        form.setLabelAlignment(Qt.AlignmentFlag.AlignLeft)
        form.setFormAlignment(Qt.AlignmentFlag.AlignLeft | Qt.AlignmentFlag.AlignTop)
        form.setFieldGrowthPolicy(QFormLayout.FieldGrowthPolicy.AllNonFixedFieldsGrow)
        for key in keys:
            form.addRow(DSLabel(labels[key]), self._values[key])
        return form

    ## MARK: - Private

    def _set_status(self, text: str, color: str, *, bold: bool = True) -> None:
        self._lbl_status.setText(text)
        weight = "bold" if bold else "normal"
        self._lbl_status.setStyleSheet(f"color: {color}; font-weight: {weight};")

    def _set_value(self, key: str, value: str | None) -> None:
        label = self._values[key]
        if value:
            label.setText(value)
            label.setStyleSheet("")
        else:
            label.setText(strings.LBL_NAO_INFORMADO)
            label.setStyleSheet(f"color: {self._COLOR_BLOCKED};")

    def _set_check(self, key: str, value: str | None, present: bool | None = None) -> None:
        present = bool(value) if present is None else present
        mark, color = ("✓", self._COLOR_OK) if present else ("✗", self._COLOR_BLOCKED)
        text = value or strings.LBL_NAO_INFORMADO
        self._values[key].setText(f'<span style="color:{color}">{mark}</span> {text}')
        self._values[key].setStyleSheet("" if value else f"color: {self._COLOR_BLOCKED};")

    def _set_search_enabled(self, enabled: bool) -> None:
        self._number_input.setEnabled(enabled)
        self._btn_search.update_state(DSButtonState.DEFAULT if enabled else DSButtonState.DISABLED)

    @staticmethod
    def _money(value: float) -> str:
        return "R$ " + f"{value:,.2f}".replace(",", "_").replace(".", ",").replace("_", ".")

    ## MARK: - Public

    def get_number(self) -> str:
        return self._number_input.text()

    def show_placeholder(self) -> None:
        self._set_status(strings.LBL_META_INSTRUCAO, self._COLOR_HINT, bold=False)
        self._lbl_status.setAlignment(Qt.AlignmentFlag.AlignCenter)
        self._details.setVisible(False)
        self._set_search_enabled(True)
        self._btn_send.update_state(DSButtonState.DISABLED)
        self.adjustSize()

    def prepare_search(self) -> None:
        self._number_input.setEnabled(False)
        self._btn_search.update_state(DSButtonState.LOADING)
        self._btn_send.update_state(DSButtonState.DISABLED)

    def show_order(self, order: ConversionOrderModel, state: ConversionState) -> None:
        self._set_value("number",   order.number)
        self._set_value("customer", order.customer_name)
        self._set_value("total",    self._money(order.total))
        self._set_value("payment",  order.first_payment_date)

        self._set_check("phone", order.customer_phone)
        self._set_check("email", order.customer_email)
        self._set_check("name",  order.customer_name, present=order.has_last_name)
        self._set_check("zip",   order.zip_code)
        self._set_check("city",  order.city)

        self._lbl_status.setAlignment(Qt.AlignmentFlag.AlignLeft | Qt.AlignmentFlag.AlignVCenter)
        if state == ConversionState.HANDLED:
            if order.meta_status == META_STATUS_SENT and order.meta_sent_at:
                self._set_status(strings.LBL_META_JA_ENVIADO.format(data=order.meta_sent_at), self._COLOR_OK)
            else:
                self._set_status(strings.LBL_META_STATUS.format(status=order.meta_status), self._COLOR_BLOCKED)
        elif state == ConversionState.OUTSIDE_WINDOW:
            self._set_status(strings.LBL_META_FORA_PRAZO, self._COLOR_WARNING)
        elif state == ConversionState.MISSING_DATA:
            self._set_status(strings.LBL_META_FALTANDO_DADOS, self._COLOR_WARNING)
        else:
            self._set_status(strings.LBL_META_PRONTO, self._COLOR_OK)

        # Faltando dados continua habilitado: o clique mostra o motivo exato no popup de erro.
        can_send = state in (ConversionState.READY, ConversionState.MISSING_DATA)

        self._details.setVisible(True)
        self._set_search_enabled(True)
        self._btn_send.update_state(DSButtonState.DEFAULT if can_send else DSButtonState.DISABLED)
        self.adjustSize()

    def prepare_send(self) -> None:
        self._set_search_enabled(False)
        self._btn_send.update_state(DSButtonState.LOADING)

    def show_sent(self, date: str) -> None:
        self._set_status(strings.LBL_META_ENVIADO.format(data=date), self._COLOR_OK)
        self._set_search_enabled(True)
        self._btn_send.update_state(DSButtonState.DISABLED)

    def finish_send_error(self) -> None:
        self._set_search_enabled(True)
        self._btn_send.update_state(DSButtonState.DEFAULT)
