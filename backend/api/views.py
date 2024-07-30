from django.http import HttpResponse, Http404, JsonResponse
from django.shortcuts import render, get_object_or_404
from .models import Book, Author, Genre
from .serializers import BookSerializer
from rest_framework import generics, viewsets

# Create your views here.
def index(request, book_id):
    return HttpResponse("Index")

class IndexView(generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

def detail(request, book_id):
    response = "You're looking at book of id %s."
    return HttpResponse(response % book_id)

def book(request, book_id):
    book = get_object_or_404(Book, pk=book_id)
    return HttpResponse(f"Book ID: {book_id} Book Name: {book.name}, Author: {book.author.name}, Genre: {book.genre}, Start Date: {book.start_date} Description: {book.description}")
