from django.db import models
from django.contrib import admin
from django.contrib.auth.models import User

class Post(models.Model):
    title = models.CharField(max_length=150)
    body = models.TextField()
    timestamp = models.DateTimeField()
    author = models.ForeignKey(User)


    def __unicode__(self):
        return self.title
        return self.body