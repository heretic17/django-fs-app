from django.contrib import admin
from .models import Book, Author, BookImage

# Register your models here.

class ProjectImageInLine(admin.TabularInline):
    model = BookImage
    extra = 1

admin.site.register(Book)
admin.site.register(Author)