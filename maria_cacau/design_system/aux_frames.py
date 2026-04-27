"""Frame composto reutilizável com label, entrada de texto e botão de cópia."""

from PyQt6.QtWidgets import QFrame, QHBoxLayout

from maria_cacau.design_system.aux_widgets import AuxWidgets


class AuxFrame(QFrame, AuxWidgets):
    ## Construtor: define a super classe e também a janela principal
    def __init__(self, nLb_:str) -> None:
        super(AuxFrame, self).__init__()
        self.gui_Ui(nLb_)

    ## Destruidor: desaloca os atributos declarados
    def __del__(self) -> None:
        del self.but, self.txt

    ## Método: configura a frame
    def gui_Ui(self, nLb_:str) -> None:
        layout = QHBoxLayout(self)
        layout.setContentsMargins(2, 2, 2, 2)
        layout.addWidget(self.lbl(nLb_, 10))

        self.txt = self.lineEdit(10)
        layout.addWidget(self.txt)

        self.but = self.btsImg()
        self.but.clicked.connect(self.bt_action)
        layout.addWidget(self.but)

    ## Método: ação do botão
    def bt_action(self):
        self.txt.selectAll()                                        # Seleciona o texto
        self.txt.copy()                                             # Copia o texto

    ## Método especial: pega o texto
    def getText(self) -> str: return self.txt.text()

    ## Método especial: define o texto
    def setText(self, t_:str) -> None: self.txt.setText(t_)
