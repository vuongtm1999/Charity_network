# Generated by Django 4.0.2 on 2022-07-31 04:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('charitysn_app', '0025_alter_post_tags_alter_post_title'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='liked',
            field=models.ManyToManyField(blank=True, related_name='liked', to='charitysn_app.Like'),
        ),
    ]