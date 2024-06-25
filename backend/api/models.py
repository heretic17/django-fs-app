from django.db import models

class Genre(models.TextChoices):
    FANTASY = "FAN", "Fantasy"
    NOIR = "NOI", "Noir"
    MYSTERY = "MYS", "Mystery"
    HORROR = "HOR", "Horror"
    FICTION = "FIC", "Fiction"
    NON_FICTION = "NON", "Non-Fiction"
    ADVENTURE = "ADV", "Adventure"
    ROMANCE = "ROM", "Romance"
    SATIRE = "SAT", "Satire"
    CLASSIC = "CLA", "Classic"

class Author(models.Model):
    name = models.CharField(max_length=64)

    def __str__(self):
        return self.name

class Book(models.Model):
    name = models.CharField(max_length=64)
    genre = models.CharField(
        max_length=3,
        choices=Genre.choices,
        blank=True
    )
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    publish_date = models.DateField()

    def __str__(self):
        return self.name
