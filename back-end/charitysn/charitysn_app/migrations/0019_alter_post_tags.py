# Generated by Django 4.0.2 on 2022-05-22 09:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('charitysn_app', '0018_alter_post_tags_alter_post_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='tags',
            field=models.ManyToManyField(blank=True, related_name='post_tags', to='charitysn_app.PostTag'),
        ),
    ]