# Generated by Django 4.0.2 on 2022-05-21 13:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('charitysn_app', '0010_alter_comment_image_alter_reply_image_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='avatar',
            field=models.ImageField(blank=True, null=True, upload_to='static/user/%Y/%m'),
        ),
    ]
