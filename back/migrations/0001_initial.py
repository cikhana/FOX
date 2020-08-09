# Generated by Django 3.1 on 2020-08-09 09:39

import django.contrib.auth.models
import django.contrib.auth.validators
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='FoxUser',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('email', models.EmailField(blank=True, max_length=254, verbose_name='email address')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Document',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='DocumentWorkerAssign',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='Template',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64)),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Work',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64)),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Worker',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64)),
                ('birthday', models.DateField()),
                ('company', models.CharField(max_length=64)),
                ('card_number_id', models.CharField(max_length=64)),
                ('license_number', models.CharField(max_length=64)),
                ('passport', models.CharField(max_length=64, null=True)),
                ('safety_green_card', models.CharField(max_length=64)),
                ('position_in_company', models.CharField(max_length=64)),
            ],
        ),
        migrations.CreateModel(
            name='ClientAdmin',
            fields=[
                ('foxuser_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='back.foxuser')),
                ('role', models.CharField(choices=[('Admin', 'Administrator')], default='Admin', max_length=10)),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            bases=('back.foxuser',),
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='ClientManager',
            fields=[
                ('foxuser_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='back.foxuser')),
                ('role', models.CharField(choices=[('SafeMan', 'Safety Manager'), ('SecMan', 'Security Manager'), ('SecOff', 'Safety Officer'), ('SiteOwn', 'Site Oswner'), ('WorkOwn', 'Owner of Work'), ('SecGrd', 'Security Guards')], default='SiteOwn', max_length=10)),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            bases=('back.foxuser',),
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='Contractor',
            fields=[
                ('foxuser_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='back.foxuser')),
                ('type', models.CharField(choices=[('Default', 'Contractor')], default='Default', max_length=10)),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            bases=('back.foxuser',),
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='TemplateItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64)),
                ('description', models.TextField()),
                ('type', models.CharField(choices=[('text', 'Text'), ('password', 'Password'), ('email', 'Email'), ('checkbox', 'Checkbox'), ('select', 'Select')], default='text', max_length=10)),
                ('type_values', models.TextField()),
                ('placeholder', models.CharField(max_length=64)),
                ('items', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back.template')),
            ],
        ),
        migrations.AddField(
            model_name='template',
            name='templates',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back.work'),
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64)),
                ('description', models.TextField()),
                ('projects', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back.work')),
            ],
        ),
        migrations.CreateModel(
            name='Permit',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('issue_date', models.DateField(auto_now_add=True)),
                ('end_date', models.DateField()),
                ('active', models.BooleanField(default=True)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back.project')),
                ('worker', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back.worker')),
            ],
        ),
        migrations.CreateModel(
            name='DocumentItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text_value', models.TextField(null=True)),
                ('str_value', models.CharField(max_length=64, null=True)),
                ('doc_items', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back.templateitem')),
                ('items', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back.document')),
            ],
        ),
        migrations.AddField(
            model_name='document',
            name='template',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back.template'),
        ),
        migrations.AddField(
            model_name='document',
            name='worker',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back.worker'),
        ),
        migrations.AddField(
            model_name='foxuser',
            name='company',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='back.company'),
        ),
        migrations.AddField(
            model_name='foxuser',
            name='groups',
            field=models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups'),
        ),
        migrations.AddField(
            model_name='foxuser',
            name='user_permissions',
            field=models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions'),
        ),
        migrations.AddField(
            model_name='worker',
            name='workers',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back.contractor'),
        ),
        migrations.CreateModel(
            name='DocumentAssign',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('issue_date', models.DateField(auto_now_add=True)),
                ('change_date', models.DateField(auto_now=True)),
                ('approve', models.BooleanField(null=True)),
                ('last_approve_date', models.DateField()),
                ('document', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back.document')),
                ('manager', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back.clientmanager')),
            ],
        ),
        migrations.AddField(
            model_name='document',
            name='managers',
            field=models.ManyToManyField(through='back.DocumentAssign', to='back.ClientManager'),
        ),
    ]
