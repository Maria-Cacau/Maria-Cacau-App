"""Área de consulta de frete: interface gráfica e lógica de consulta."""

from PyQt6.QtWidgets import QHBoxLayout, QVBoxLayout

from maria_cacau.design_system.aux_widgets import AuxWidgets


class GuiConsFrete(AuxWidgets):
    ## Construtor: define a super classe e também o grupo
    def __init__(self) -> None:
        super().__init__()

        self.root = self.group_box("Consulta Frete")                                    # Cria o Group Box
        self.root.setEnabled(False)                                                     # v5.0: Deixa inativo

        self.setup_ui()

    ## Método: cria e configura a janela
    def setup_ui(self) -> None:
        layout = QVBoxLayout(self.root)

        inputLayout = QHBoxLayout()
        inputLayout.addWidget(self.lbl("Origem:", 10))
        self.tOrigem = self.line_edit(10, readonly_=False)
        inputLayout.addWidget(self.tOrigem)
        inputLayout.addWidget(self.lbl("Destino:", 10))
        self.tDestino = self.line_edit(10, readonly_=False)
        inputLayout.addWidget(self.tDestino)
        layout.addLayout(inputLayout)

        self.resp = self.text_view()
        layout.addWidget(self.resp)

        btnLayout = QHBoxLayout()
        btnLayout.addStretch()
        self.btVeri = self.bts("Verificar")
        btnLayout.addWidget(self.btVeri)
        self.btCopi = self.bts("Copiar")
        btnLayout.addWidget(self.btCopi)
        layout.addLayout(btnLayout)
