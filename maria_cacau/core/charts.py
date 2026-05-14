"""Widget de gráfico reutilizável (barras ou pizza) usando seaborn + matplotlib."""

import re
from enum import Enum, auto

import matplotlib

matplotlib.use('QtAgg')

import seaborn as sns
from matplotlib.backends.backend_qtagg import FigureCanvasQTAgg
from matplotlib.figure import Figure
from PyQt6.QtCore import Qt
from PyQt6.QtWidgets import QScrollArea, QVBoxLayout, QWidget


class ChartType(Enum):
    BAR = auto()
    PIE = auto()


def _short_label(name: str) -> str:
    m = re.search(r'\(([A-Z0-9]+)\)', name)
    if m:
        return m.group(1)
    clean = name.strip()
    return (clean[:10] + '…') if len(clean) > 10 else clean or '—'


class ChartWidget(QWidget):
    def __init__(self, chart_type: ChartType = ChartType.BAR) -> None:
        super().__init__()
        self._fig = Figure(layout='tight')
        self._canvas = FigureCanvasQTAgg(self._fig)
        self._fig.patch.set_facecolor('#ffffff')
        self._canvas.setStyleSheet('background: white;')
        self.setStyleSheet('background: white;')

        self._scroll = QScrollArea()
        self._scroll.setWidget(self._canvas)
        self._scroll.setWidgetResizable(False)   # canvas controla o próprio tamanho
        self._scroll.setHorizontalScrollBarPolicy(Qt.ScrollBarPolicy.ScrollBarAsNeeded)
        self._scroll.setVerticalScrollBarPolicy(Qt.ScrollBarPolicy.ScrollBarAlwaysOff)
        self._scroll.setStyleSheet('''
            QScrollArea { border: none; background: white; }
            QScrollBar:horizontal {
                height: 14px; background: #f0f0f0;
            }
            QScrollBar::handle:horizontal {
                background: #a0a0a0; min-width: 20px; border-radius: 3px;
            }
            QScrollBar::handle:horizontal:hover { background: #787878; }
            QScrollBar::add-line:horizontal, QScrollBar::sub-line:horizontal { width: 0px; }
        ''')
        self._scroll.viewport().setStyleSheet('background: white;')

        layout = QVBoxLayout(self)
        layout.setContentsMargins(0, 0, 0, 0)
        layout.setSpacing(0)
        layout.addWidget(self._scroll)

        self._type  = chart_type
        self._data:  dict = {}
        self._title: str  = ''

    # ── API pública ──────────────────────────────────────────────────────────

    def update_data(self, data: dict, title: str = '') -> None:
        self._data  = data
        self._title = title
        self._render()

    def set_type(self, chart_type: ChartType) -> None:
        self._type = chart_type
        if self._data:
            self._render()

    def copy_to_clipboard(self) -> None:
        from io import BytesIO

        from PyQt6.QtGui import QImage
        from PyQt6.QtWidgets import QApplication
        buf = BytesIO()
        self._fig.savefig(buf, format='png', dpi=150, bbox_inches='tight', facecolor='white')
        buf.seek(0)
        QApplication.clipboard().setImage(QImage.fromData(buf.getvalue()))

    def save_to_file(self) -> None:
        from PyQt6.QtWidgets import QFileDialog
        path, _ = QFileDialog.getSaveFileName(
            self, 'Salvar gráfico', 'grafico.png', 'PNG (*.png);;SVG (*.svg)'
        )
        if path:
            self._fig.savefig(path, dpi=150, bbox_inches='tight', facecolor='white')

    # ── Helpers ──────────────────────────────────────────────────────────────

    def _canvas_dims(self, desired_w: int) -> tuple[int, int]:
        """Retorna (w, h) para o canvas.
        h = altura do viewport (sem desperdício/overflow vertical).
        w = max(desired_w, largura do viewport) → scroll se desired_w > viewport.
        """
        vp = self._scroll.viewport()
        h  = vp.height() if vp.height() > 10 else 280
        w  = max(desired_w, vp.width() if vp.width() > 10 else desired_w)
        return w, h

    # ── Renderização ─────────────────────────────────────────────────────────

    def _render(self) -> None:
        if self._type == ChartType.BAR:
            self._render_bar()
        else:
            self._render_pie()

    def _render_bar(self) -> None:
        self._fig.clear()
        ax = self._fig.add_subplot(111)

        clean = {k: v for k, v in self._data.items() if k and k.strip()}
        if not clean:
            self._empty(ax)
            return

        sorted_items = sorted(clean.items(), key=lambda x: x[1], reverse=True)
        labels = [_short_label(k) for k, _ in sorted_items]
        values = [v for _, v in sorted_items]
        n = len(labels)

        # 22px por barra garante que labels não se sobreponham; scroll aparece automaticamente
        w_px, h_px = self._canvas_dims(n * 22)
        self._canvas.resize(w_px, h_px)

        colors = sns.color_palette('YlOrBr', n_colors=n)[::-1]
        bars = ax.bar(range(n), values, color=colors, edgecolor='#5D4037', linewidth=0.5)

        ax.set_xticks(range(n))
        ax.set_xticklabels(labels, rotation=45, ha='right', fontsize=7)
        ax.set_ylabel('Qtd', fontsize=8)
        ax.tick_params(axis='y', labelsize=7)
        if self._title:
            ax.set_title(self._title, fontsize=9, pad=6)

        top = max(values)
        for bar, val in zip(bars, values):
            ax.text(bar.get_x() + bar.get_width() / 2,
                    bar.get_height() + top * 0.01,
                    str(val), ha='center', va='bottom', fontsize=6)

        sns.despine(ax=ax)
        ax.set_facecolor('#fafafa')
        self._canvas.draw()

    def _render_pie(self) -> None:
        self._fig.clear()
        ax = self._fig.add_subplot(111)

        clean = {k: v for k, v in self._data.items() if v > 0}
        if not clean:
            self._empty(ax)
            return

        # Pie preenche o viewport sem scroll
        w_px, h_px = self._canvas_dims(0)
        self._canvas.resize(w_px, h_px)

        labels = [_short_label(k) for k in clean]
        values = list(clean.values())
        total  = sum(values)
        colors = sns.color_palette('Set2', n_colors=len(labels))
        many   = len(labels) > 10

        wedges, texts, autotexts = ax.pie(
            values,
            labels=None if many else labels,
            autopct=lambda p: f'{p:.0f}%' if many else f'{p:.0f}%\n({int(round(p * total / 100))})',
            pctdistance=0.82,
            colors=colors,
            startangle=90,
            wedgeprops={'edgecolor': 'white', 'linewidth': 1.5},
        )
        for at in autotexts:
            at.set_fontsize(6 if many else 7)
        if not many:
            for t in texts:
                t.set_fontsize(8)

        if many:
            ax.legend(wedges, labels, fontsize=6, loc='center left',
                      bbox_to_anchor=(1.0, 0.5))

        if self._title:
            ax.set_title(self._title, fontsize=9, pad=6)

        ax.set_facecolor('#fafafa')
        self._canvas.draw()

    def _empty(self, ax) -> None:
        w_px, h_px = self._canvas_dims(0)
        self._canvas.resize(w_px, h_px)
        ax.axis('off')
        ax.text(0.5, 0.5, 'Sem dados', ha='center', va='center',
                transform=ax.transAxes, fontsize=10, color='gray')
        self._canvas.draw()
