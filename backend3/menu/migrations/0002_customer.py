# Generated by Django 4.1.2 on 2023-10-19 17:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(default='')),
                ('password', models.TextField(default='')),
                ('email', models.TextField(default='')),
            ],
        ),
    ]
