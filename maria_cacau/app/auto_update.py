import os
import sys


class AppAutoUpdate:
    _APPCAST_URL = "https://raw.githubusercontent.com/Maria-Cacau/Maria-Cacau-App/feat/auto-update/appcast.xml"

    def __init__(self) -> None:
        self.setup()

    @property
    def is_windows(self) -> bool:
        return sys.platform == 'win32'

    def setup(self) -> None:
        if not self.is_windows: return

        if getattr(sys, 'frozen', False) and not hasattr(sys, '_MEIPASS'):
            sys._MEIPASS = os.path.dirname(os.path.abspath(__file__))

        import pywinsparkle  # type: ignore[import]
        pywinsparkle.win_sparkle_set_appcast_url(self._APPCAST_URL)
        pywinsparkle.win_sparkle_init()

    def cleanup(self) -> None:
        if not self.is_windows: return
        import pywinsparkle  # type: ignore[import]
        pywinsparkle.win_sparkle_cleanup()
