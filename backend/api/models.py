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
    PHILOSOPHY = "PHI", "Philosophy"
    HISTORY = "HIS", "History"

class Author(models.Model):
    name = models.CharField(max_length=64)

    def __str__(self) -> str:
        return self.name

class Book(models.Model):
    name = models.CharField(max_length=64)
    genre = models.CharField(
        max_length=64,
        choices=Genre.choices,
        blank=True
    )
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    start_date = models.DateField()
    finish_date = models.DateField(null=True)
    description = models.TextField()

    def __str__(self) -> str:
        return self.name

class BookImage(models.Model):
    project = models.ForeignKey(Book, related_name="images", on_delete=models.CASCADE)
    image = models.ImageField(upload_to="book_images/")
    def __str__(self) -> str:
        return f"{self.project.title} Image"