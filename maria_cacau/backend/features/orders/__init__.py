from flask import Blueprint

from ...data_source import data_source
from ...data_source.errors._errors import DataSourceNotReadyError
from .subfeatures import deliveries_bp, payments_bp, summary_bp

orders_bp = Blueprint("orders", __name__)
orders_bp.register_blueprint(deliveries_bp)
orders_bp.register_blueprint(payments_bp)
orders_bp.register_blueprint(summary_bp)


@orders_bp.before_request
def check_connection():
    if not data_source.is_ready():
        raise DataSourceNotReadyError()
