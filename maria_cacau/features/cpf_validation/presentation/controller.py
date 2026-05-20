"""Controller da feature CPF Validation: conecta signals da view ao ViewModel e trata respostas."""

from maria_cacau.core.observability import observability

from ..domain.events import FeatureEvents as ObsEv
from ..domain.models import CpfValidationResult
from ..domain.signals import signals
from .view import CpfValidationView
from .viewmodel import CpfValidationViewModel


class CpfValidationController:
    def __init__(self) -> None:
        self.view = CpfValidationView()
        self.viewmodel = CpfValidationViewModel()
        self._setup_actions()

    def _setup_actions(self) -> None:
        self.view.validate_cpf.connect(self.on_validate)
        signals.result.connect(self.handle_result)

    def on_validate(self) -> None:
        cpf = self.view.get_cpf()
        if not cpf.strip():
            return
        observability.log(ObsEv.VALIDATE_ACTION)
        self.viewmodel.on_validate(cpf)

    def handle_result(self, result: CpfValidationResult) -> None:
        self.view.update_result(result)
        observability.log(ObsEv.RESULT, valid=result.is_valid)
