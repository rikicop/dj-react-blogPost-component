# Generated by Django 3.0.2 on 2021-07-17 15:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todos', '0007_auto_20210717_1509'),
    ]

    operations = [
        migrations.AddField(
            model_name='todo',
            name='description',
            field=models.CharField(blank=True, max_length=200),
        ),
    ]
