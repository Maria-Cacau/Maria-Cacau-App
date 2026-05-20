from PyQt6.QtCore import QObject, pyqtSignal


class _EventBus(QObject):
    # ── App ───────────────────────────────────────────────────────────────────
    app_init_finished = pyqtSignal()

    # ── Auth ──────────────────────────────────────────────────────────────────
    credentials_configured = pyqtSignal()
    credentials_cleared    = pyqtSignal()

    # ── Sheets ────────────────────────────────────────────────────────────────
    cache_cleared   = pyqtSignal()
    sheet_connected = pyqtSignal(object)   # SheetModel
    sheet_selected  = pyqtSignal(object)   # SheetModel
    sheet_renamed   = pyqtSignal(object)   # SheetModel
    sheet_removed   = pyqtSignal(object)   # SheetModel

    # ── Requests ──────────────────────────────────────────────────────────────
    request_started  = pyqtSignal(object)   # Service
    request_finished = pyqtSignal(object)   # Service


bus = _EventBus()
