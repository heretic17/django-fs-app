from rest_framework import serializers
from .models import Book, Author, Genre

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ["id", "name"]

class BookSerializer(serializers.ModelSerializer):
    author = AuthorSerializer(read_only=True)  # Use the nested AuthorSerializer for the author field

    class Meta:
        model = Book
        fields = ['id', 'name', 'genre', 'author', 'start_date', 'finish_date']
