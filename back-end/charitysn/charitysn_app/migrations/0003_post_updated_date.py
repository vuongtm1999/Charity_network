# Generated by Django 4.0.2 on 2022-05-20 01:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('charitysn_app', '0002_post_active_alter_comment_image_alter_reply_image_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='updated_date',
            field=models.DateTimeField(auto_now=True),
        ),
    ]