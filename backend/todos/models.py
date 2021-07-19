from django.db import models

class Todo(models.Model):
    foto = models.CharField(max_length=1000)
    author = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200,blank=True)
    body = models.TextField()
    
    def __str__(self):
        return self.title


