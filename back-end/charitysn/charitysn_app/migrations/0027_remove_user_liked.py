# Generated by Django 4.0.2 on 2022-07-31 06:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('charitysn_app', '0026_user_liked'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='liked',
        ),
    ]
