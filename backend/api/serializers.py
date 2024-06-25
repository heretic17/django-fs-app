from rest_framework import serializers
from .models import Book, Author, Genre

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ["id", "name"]

class BookSerializer(serializers.ModelSerializer):
    author = serializers.SerializerMethodField()  # Use a method field to get the author's name

    class Meta:
        model = Book
        fields = ['id', 'name', 'genre', 'author', 'publish_date']

    def get_author(self, obj):
        return obj.author.name  # Return the author's name directly