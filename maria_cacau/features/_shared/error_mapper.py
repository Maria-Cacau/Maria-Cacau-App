"""Conversão do corpo de erro do backend em ErrorModel, comum a toda feature que chama o backend."""

from maria_cacau.core.error import ErrorModel, http_error
from maria_cacau.core.network import HTTPResponseError


class ErrorMapper:
    @staticmethod
    def from_response(e: HTTPResponseError) -> ErrorModel:
        """Lê o JSON do backend; cai em http_error genérico se o corpo não for JSON válido."""
        try:
            data = e.response.json()
        except Exception:
            return http_error(e.status_code)
        return ErrorModel(
            code=data.get("code", "NET"),
            user_message=data.get("user_message", "Erro inesperado."),
            dev_message=data.get("dev_message", str(e)),
        )
