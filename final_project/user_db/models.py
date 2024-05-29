from django.db import models
from django.utils import timezone

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=200)
    email = models.EmailField(max_length=200)
    password = models.CharField(max_length=200)
    date_joined = models.DateTimeField("date joined", default=timezone.now)

    def __str__(self):
        return self.username


