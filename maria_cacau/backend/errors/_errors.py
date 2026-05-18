class BackendError(Exception):
    code:         str
    user_message: str
    dev_message:  str
    http_status:  int

    def to_dict(self) -> dict:
        return {
            "code":         self.code,
            "user_message": self.user_message,
            "dev_message":  self.dev_message,
        }
