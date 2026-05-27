from sqlalchemy import Column, String, DateTime, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from datetime import datetime
import uuid
from app.core.db import Base

class Subscription(Base):
    __tablename__ = "subscriptions"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), unique=True)
    stripe_customer_id = Column(String)
    plan = Column(String, default="free")
    status = Column(String, default="active")
    current_period_end = Column(DateTime)
    created_at = Column(DateTime, default=datetime.utcnow)
