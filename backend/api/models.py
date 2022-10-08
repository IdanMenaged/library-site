from django.db import models


class Tag(models.Model):
    text = models.CharField(max_length=100, primary_key=True)

    def __str__(self):
        return self.text


class Book(models.Model):
    title = models.CharField(max_length=100, primary_key=True)
    author = models.CharField(max_length=100)
    published = models.DateField()
    cover = models.ImageField(upload_to='res/covers')
    summary = models.TextField()
    publisher = models.CharField(max_length=200)
    count = models.IntegerField()
    tags = models.ManyToManyField(Tag, blank=True)

    class Meta:
        ordering = ['title']

    def __str__(self):
        return self.title

# Create your models here.
