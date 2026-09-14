"""View da feature Meta Conversion: dialog para buscar um pedido e enviá-lo à Meta."""

from PyQt6.QtCore import Qt, pyqtSignal
from PyQt6.QtWidgets import (QDialog, QFormLayout, QHBoxLayout, QVBoxLayout,
                             QWidget)

from maria_cacau.assets import strings
from maria_cacau.design_system.components import (DSButton, DSButtonState,
                                                  DSDialog, DSGroupBox,
                                                  DSLabel, DSTextInput)
from maria_cacau.design_system.constants import DIALOG_MIN_WIDTH

from ..domain.models import META_STATUS_SENT, ConversionOrderModel


class MetaConversionView(QDialog):
    search_requested = pyqtSignal()
    send_requested   = pyqtSignal()

    _COLOR_OK      = '#388e3c'
    _COLOR_BLOCKED = '#C62828'
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

        self._values = {
            key: DSLabel("") for key in
            ("number", "customer", "phone", "email", "total", "payment", "delivery", "zip", "city", "products")
        }
        self._values["products"].setWordWrap(True)

        self._btn_close = DSButton(strings.BTN_FECHAR)
        self._btn_close.clicked.connect(self.close)

        self._btn_send = DSButton(strings.BTN_ENVIAR_META)
        self._btn_send.clicked.connect(self.send_requested)

    def _setup_layout(self) -> None:
        order_box = DSGroupBox(strings.DLG_META_GRP_PEDIDO)
        order_layout = QHBoxLayout(order_box)
        order_layout.addWidget(DSLabel(strings.DLG_META_LBL_NUMERO))
        order_layout.addWidget(self._number_input)
        order_layout.addWidget(self._btn_search)

        self._details = QWidget()
        form = QFormLayout(self._details)
        form.setContentsMargins(0, 0, 0, 0)
        labels = {
            "number":   strings.DLG_META_CAMPO_PEDIDO,
            "customer": strings.DLG_META_CAMPO_CLIENTE,
            "phone":    strings.DLG_META_CAMPO_TELEFONE,
            "email":    strings.DLG_META_CAMPO_EMAIL,
            "total":    strings.DLG_META_CAMPO_VALOR,
            "payment":  strings.DLG_META_CAMPO_PAGAMENTO,
            "delivery": strings.DLG_META_CAMPO_ENTREGA,
            "zip":      strings.DLG_META_CAMPO_CEP,
            "city":     strings.DLG_META_CAMPO_CIDADE,
            "products": strings.DLG_META_CAMPO_PRODUTOS,
        }
        for key, label in labels.items():
            form.addRow(DSLabel(label), self._values[key])

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

    def prepare_search(self) -> None:
        self._number_input.setEnabled(False)
        self._btn_search.update_state(DSButtonState.LOADING)
        self._btn_send.update_state(DSButtonState.DISABLED)

    def show_order(self, order: ConversionOrderModel) -> None:
        self._set_value("number",   order.number)
        self._set_value("customer", order.customer_name)
        self._set_value("phone",    order.customer_phone)
        self._set_value("email",    order.customer_email)
        self._set_value("total",    self._money(order.total))
        self._set_value("payment",  order.first_payment_date)
        self._set_value("delivery", f"{order.delivery_date} — {order.delivery_type}")
        self._set_value("zip",      order.zip_code)
        self._set_value("city",     order.city)
        self._set_value("products", "\n".join(f"{p.quantity} × {p.name}" for p in order.products))

        self._lbl_status.setAlignment(Qt.AlignmentFlag.AlignLeft | Qt.AlignmentFlag.AlignVCenter)
        if order.can_send:
            self._set_status(strings.LBL_META_PRONTO, self._COLOR_OK)
        elif order.meta_status == META_STATUS_SENT and order.meta_sent_at:
            self._set_status(strings.LBL_META_JA_ENVIADO.format(data=order.meta_sent_at), self._COLOR_OK)
        else:
            self._set_status(strings.LBL_META_STATUS.format(status=order.meta_status), self._COLOR_BLOCKED)

        self._details.setVisible(True)
        self._set_search_enabled(True)
        self._btn_send.update_state(DSButtonState.DEFAULT if order.can_send else DSButtonState.DISABLED)

    def prepare_send(self) -> None:
        self._set_search_enabled(False)
        self._btn_send.update_state(DSButtonState.LOADING)

    def show_sent(self, date: str) -> None:
        self._set_status(strings.LBL_META_ENVIADO.format(data=date), self._COLOR_OK)
        self._set_search_enabled(True)
        self._btn_send.update_state(DSButtonState.DISABLED)

    def finish_send_error(self, can_retry: bool) -> None:
        self._set_search_enabled(True)
        self._btn_send.update_state(DSButtonState.DEFAULT if can_retry else DSButtonState.DISABLED)
