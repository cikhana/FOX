"""
Django settings for FOX project.

Generated by 'django-admin startproject' using Django 3.0.8.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.0/ref/settings/
"""

import os
import datetime
import environ

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

env = environ.Env(
    EMAIL_HOST=(str, "Dummy"),
    EMAIL_PORT=(str, "Dummy"),
    EMAIL_HOST_USER=(str, "Dummy"),
    EMAIL_EMAIL_FROM=(str, "Dummy"),
    EMAIL_HOST_PASSWORD=(str, "Dummy"),
    EMAIL_BASE_LINK=(str, "Dummy"),
    DB_MAIN_NAME=(str, "Dummy"),
    DB_MAIN_USER=(str, "Dummy"),
    DB_MAIN_HOST=(str, "Dummy"),
    DB_MAIN_PORT=(str, "Dummy"),
    DB_MAIN_PASSWORD=(str, "Dummy"),
    PERMIT_VALIDATE_KEY=(str, "12345"),
    DISPLAY_FILE_KEY=(str, "12345"),
    SECRET_KEY=(str, "12345"),
    DEBUG=(bool, True),
    MEDIA_ROOT=(str, os.path.join(BASE_DIR, "local_files")),
    HOST_NAME=(str, "localhost"),
    HOST_NAME_ALT=(str, "127.0.0.1"),
    EMAIL_REGISTER_LINK_FORMAT=(
        str,
        "http://127.0.0.1:8000/#/register?token={}&username={}",
    ),
    MAX_NOTIFICATION_DISPLAY=(int, 5),
)
# environ.Env.read_env("FOX/.env.taras")
environ.Env.read_env()

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = env("DEBUG")


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env("SECRET_KEY")

ALLOWED_HOSTS = [
    "localhost",
    "127.0.0.1",
    env("HOST_NAME"),
    env("HOST_NAME_ALT"),
]  # localhost, s2b host, aws

MEDIA_ROOT = env("MEDIA_ROOT")

# Application definition

INSTALLED_APPS = [
    "django_extensions",
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "back.apps.BackConfig",
    "rest_framework",
    "corsheaders",
    "django_rest_passwordreset",
    "front",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "FOX.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [
            "/back/templates/back/",
        ],  # noqa E231
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "FOX.wsgi.application"

# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": env("DB_MAIN_NAME"),
        "USER": env("DB_MAIN_USER"),
        "HOST": env("DB_MAIN_HOST"),
        "PORT": env("DB_MAIN_PORT"),
        "PASSWORD": env("DB_MAIN_PASSWORD"),
    }
}


# Password validation
# https://docs.djangoproject.com/en/3.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator"},
    {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator"},
    {"NAME": "django.contrib.auth.password_validation.NumericPasswordValidator"},
]

AUTH_USER_MODEL = "back.FoxUser"
# AUTH_USER_MODEL = 'authtools.User'

REST_FRAMEWORK = {
    "DEFAULT_PERMISSION_CLASSES": ("rest_framework.permissions.IsAuthenticated",),
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework_jwt.authentication.JSONWebTokenAuthentication",
        "rest_framework.authentication.SessionAuthentication",
        "rest_framework.authentication.BasicAuthentication",
    ),
}

CORS_ORIGIN_WHITELIST = ("http://localhost:8000",)

CORS_ALLOW_CREDENTIALS = True

EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_HOST = env("EMAIL_HOST")
EMAIL_USE_TLS = True
EMAIL_PORT = env("EMAIL_PORT")
EMAIL_HOST_USER = env("EMAIL_HOST_USER")
EMAIL_EMAIL_FROM = env("EMAIL_EMAIL_FROM")
EMAIL_HOST_PASSWORD = env("EMAIL_HOST_PASSWORD")
EMAIL_USE_TLS = True
EMAIL_USE_SSL = False
EMAIL_REGISTER_LINK_FORMAT = env("EMAIL_REGISTER_LINK_FORMAT")
EMAIL_BASE_LINK = env("EMAIL_BASE_LINK")

# Internationalization
# https://docs.djangoproject.com/en/3.0/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "Asia/Kuala_Lumpur"

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.0/howto/static-files/

STATIC_URL = "/static/"

DISPLAY_FILE_KEY = env("DISPLAY_FILE_KEY")
PERMIT_VALIDATE_KEY = env("PERMIT_VALIDATE_KEY")

JWT_AUTH = {
    "JWT_ENCODE_HANDLER": "rest_framework_jwt.utils.jwt_encode_handler",
    "JWT_DECODE_HANDLER": "rest_framework_jwt.utils.jwt_decode_handler",
    "JWT_PAYLOAD_HANDLER": "rest_framework_jwt.utils.jwt_payload_handler",
    "JWT_PAYLOAD_GET_USER_ID_HANDLER": "rest_framework_jwt.utils.jwt_get_user_id_from_payload_handler",
    "JWT_RESPONSE_PAYLOAD_HANDLER": "FOX.utils.my_jwt_response_handler",
    "JWT_SECRET_KEY": SECRET_KEY,
    "JWT_GET_USER_SECRET_KEY": None,
    "JWT_PUBLIC_KEY": None,
    "JWT_PRIVATE_KEY": None,
    "JWT_ALGORITHM": "HS256",
    "JWT_VERIFY": True,
    "JWT_VERIFY_EXPIRATION": True,
    "JWT_LEEWAY": 0,
    "JWT_EXPIRATION_DELTA": datetime.timedelta(days=2),
    "JWT_AUDIENCE": None,
    "JWT_ISSUER": None,
    "JWT_ALLOW_REFRESH": False,
    "JWT_REFRESH_EXPIRATION_DELTA": datetime.timedelta(days=7),
    "JWT_AUTH_HEADER_PREFIX": "JWT",
    "JWT_AUTH_COOKIE": None,
}

MAX_NOTIFICATION_DISPLAY = env("MAX_NOTIFICATION_DISPLAY")
