# Generated by Django 5.0.6 on 2024-07-30 13:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_alter_book_genre'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='genre',
            field=models.CharField(blank=True, choices=[('FAN', 'Fantasy'), ('NOI', 'Noir'), ('MYS', 'Mystery'), ('HOR', 'Horror'), ('FIC', 'Fiction'), ('NON', 'Non-Fiction'), ('ADV', 'Adventure'), ('ROM', 'Romance'), ('SAT', 'Satire'), ('CLA', 'Classic'), ('PHI', 'Philosophy'), ('HIS', 'History')], max_length=64),
        ),
    ]