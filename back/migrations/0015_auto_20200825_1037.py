# Generated by Django 3.1 on 2020-08-25 07:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('back', '0014_auto_20200824_0928'),
    ]

    operations = [
        migrations.AlterField(
            model_name='document',
            name='target_type',
            field=models.CharField(choices=[('Contractor', 'Contractor'), ('Worker', 'Worker')], default='Contractor', max_length=12),
        ),
    ]
