from rest_framework import serializers
from .models import Book, Author, Genre

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ["id", "name"]

class BookSerializer(serializers.ModelSerializer):
    author = AuthorSerializer(read_only=True)  # Use the nested AuthorSerializer for the author field
    genre = serializers.SerializerMethodField()


    class Meta:
        model = Book
        fields = ['id', 'name', 'genre', 'author', 'start_date', 'finish_date', 'description']
    
    def get_genre(self, obj):
        return obj.get_genre_display()
