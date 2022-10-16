from django.contrib.auth.models import User
from rest_framework import serializers

from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['title', 'author', 'published', 'cover', 'summary', 'tags', 'publisher', 'count']


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['text']