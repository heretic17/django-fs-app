from rest_framework import serializers
from .models import Book, Author, Genre

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'