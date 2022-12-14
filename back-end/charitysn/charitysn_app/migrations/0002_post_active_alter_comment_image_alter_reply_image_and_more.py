# Generated by Django 4.0.2 on 2022-05-20 01:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('charitysn_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='active',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='comment',
            name='image',
            field=models.ImageField(null=True, upload_to='comment/%Y/%m'),
        ),
        migrations.AlterField(
            model_name='reply',
            name='image',
            field=models.ImageField(null=True, upload_to='reply/%Y/%m'),
        ),
        migrations.AlterField(
            model_name='user',
            name='avatar',
            field=models.ImageField(null=True, upload_to='user/%Y/%m'),
        ),
    ]
