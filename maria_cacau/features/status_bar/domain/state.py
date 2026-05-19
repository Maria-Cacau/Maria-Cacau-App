from enum import Enum


class StatusBarState(Enum):
    NO_CREDENTIALS = ('#A07800',)
    NO_SHEET       = ('#A07800',)
    CONNECTED      = ('#388e3c',)
    BUSY           = ('#C27D18',)

    @property
    def color(self) -> str:
        return self.value[0]
