# Generated by Django 3.1 on 2020-12-06 08:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('back', '0078_auto_20201126_0501'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='status',
            field=models.CharField(choices=[('Created', 'Created'), ('Submitted', 'Submitted'), ('Approved', 'Approved'), ('Rejected', 'Rejected'), ('Started', 'Started'), ('Works_finished', 'Works finished'), ('Extended', 'Extended'), ('Closed', 'Closed')], default='Created', max_length=16),
        ),
    ]
