# Generated by Django 3.1 on 2020-10-20 09:43

import back.models.worker
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('back', '0060_remove_worker_registration_number'),
    ]

    operations = [
        migrations.AddField(
            model_name='worker',
            name='card_number_id_scan',
            field=models.FileField(blank=True, null=True, upload_to=back.models.worker.project_docs_path),
        ),
    ]
