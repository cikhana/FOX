from django.db import models
from django.utils.translation import gettext_lazy as _
from django.db.models.signals import post_save
from back.signals.mailing_signals import send_mail_on_creation

from django.contrib.auth import get_user_model

FoxUser = get_user_model()


class ClientManager(FoxUser):
    class Position(models.TextChoices):
        safety_manager = "SafeMan", _("Safety Manager")
        security_manager = "SecMan", _("Security Manager")
        safety_officer = "SecOff", _("Security Officer")
        site_owner = "SiteOwn", _("Site Owner")
        work_owner = "WorkOwn", _("Owner of Work")
        security_guards = "SecGrd", _("Security Guards")

    # name = models.CharField(max_length=128, null=True)
    department = models.CharField(max_length=128, null=True)
    position = models.CharField(
        max_length=10,
        choices=Position.choices,
        default=Position.site_owner,
    )

    class Meta:
        verbose_name = "Client Manager"

    @property
    def info(self):
        return {"client_manager_name": self.name}


post_save.connect(send_mail_on_creation, sender=ClientManager)
