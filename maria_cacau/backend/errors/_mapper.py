from ..data_source.errors._errors import *
from ._errors import BackendError

_HTTP_STATUS: dict[type[DataSourceError], int] = {
    CredentialsFileNotFoundError:   422,
    CredentialsSaveError:           500,
    CredentialsFileCorruptedError:  422,
    CredentialsFormatError:         422,
    InvalidCredentialsError:        401,
    NetworkUnavailableError:        503,
    NetworkTimeoutError:            504,
    TokenExpiredError:              401,
    SheetIdInvalidError:            422,
    SheetNotFoundError:             404,
    SheetAccessDeniedError:         403,
    InvalidDateFormatError:         400,
    InvalidDateRangeError:          400,
    ApiQuotaExceededError:          429,
    ApiUnexpectedResponseError:     502,
    UnexpectedSheetStructureError:  502,
    PrewarmFailedError:             503,
    DataSourceNotReadyError:        503,
}


def translate(e: DataSourceError) -> BackendError:
    backend      = BackendError(str(e))
    backend.code         = e.code
    backend.user_message = e.user_message
    backend.dev_message  = e.dev_message
    backend.http_status  = _HTTP_STATUS.get(type(e), 500)
    return backend
