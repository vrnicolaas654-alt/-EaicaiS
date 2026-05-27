from pydantic_settings import BaseSettings
from typing import List

class Settings(BaseSettings):
    APP_NAME: str = "EAICAIS"
    ENVIRONMENT: str = "development"
    LOG_LEVEL: str = "INFO"
    DATABASE_URL: str = "postgresql://eaicais:strongpassword@localhost:5432/eaicais_db"
    REDIS_URL: str = "redis://localhost:6379/0"
    JWT_SECRET: str = "your-secret-key-change-in-production"
    OPENAI_API_KEY: str = ""
    GOOGLE_CLIENT_ID: str = ""
    GOOGLE_CLIENT_SECRET: str = ""
    STRIPE_SECRET_KEY: str = ""
    STRIPE_WEBHOOK_SECRET: str = ""
    CORS_ORIGINS: List[str] = ["http://localhost:3000"]
    EMAIL_FROM: str = "noreply@eaicais.ai"
    CELERY_BROKER_URL: str = "redis://localhost:6379/1"
    
    class Config:
        env_file = ".env"
        case_sensitive = True

settings = Settings()
