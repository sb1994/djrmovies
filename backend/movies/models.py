from django.db import models

# Create your models here.


class Movie(models.Model):
    backdrop_path = models.CharField(max_length=120)
    budget = models.CharField(max_length=120)
    tmdb_id = models.CharField(max_length=120)
    orginal_title = models.TextField()
    overview = models.TextField()
    poster_path = models.TextField()
    popularity = models.TextField()
    status = models.TextField()
    release_date = models.TextField()
    runtime = models.TextField()
    tagline = models.TextField()
    title = models.TextField()
    video = models.TextField()
    vote_average = models.TextField()
    vote_count = models.TextField()

    def __self__(self):
        return self.title


class Genre(models.Model):
    o_id = models.CharField(max_length=40)
    name = models.CharField(max_length=40)

    def __self__(self):
        return self.name
