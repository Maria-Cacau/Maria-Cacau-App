"""Frame composto reutilizável com label, entrada de texto e botão de cópia."""

from PyQt6.QtWidgets import QFrame, QHBoxLayout

from maria_cacau.design_system.aux_widgets import AuxWidgets


class AuxFrame(QFrame, AuxWidgets):
    ## Construtor: define a super classe e também a janela principal
    def __init__(self, nLb_:str) -> None:
        super().__init__()
        self.setup_ui(nLb_)

    ## Método: configura a frame
    def setup_ui(self, nLb_:str) -> None:
        layout = QHBoxLayout(self)
        layout.setContentsMargins(2, 2, 2, 2)
        layout.addWidget(self.lbl(nLb_, 10))

        self.txt = self.line_edit(10)
        layout.addWidget(self.txt)

        self.but = self.button_img()
        self.but.clicked.connect(self.bt_action)
        layout.addWidget(self.but)

    ## Método: ação do botão
    def bt_action(self):
        self.txt.selectAll()                                        # Seleciona o texto
        self.txt.copy()                                             # Copia o texto

    ## Método especial: pega o texto
    def get_text(self) -> str: return self.txt.text()

    ## Método especial: define o texto
    def set_text(self, t_:str) -> None: self.txt.setText(t_)
