from django.urls import path
from . import views
from .views import IndexView


#Kitap ve yazar api'ları ayrı olacak
urlpatterns = [
    path("", IndexView.as_view(), name="index-view"),
    path("<int:book_id>/", views.detail, name="detail"),
    path("<int:book_id>/detail/", views.book, name="book")
]
