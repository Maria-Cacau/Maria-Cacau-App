from dataclasses import dataclass

from maria_cacau.design_system.gui_popup import PopupModel


@dataclass
class ErrorModel:
    code: str
    user_message: str
    dev_message: str

    @classmethod
    def from_error(cls, err) -> "ErrorModel":
        return cls(
            code=err.code,
            user_message=err.user_message,
            dev_message=err.dev_message,
        )

    def to_popup(self) -> PopupModel:
        return PopupModel(
            title=f"Erro {self.code}",
            message=self.user_message,
            detail=self.dev_message,
        )
