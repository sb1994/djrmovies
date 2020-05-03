from rest_framework import serializers
from .models import Movie


class MovieSerializer(serializers.ModelSerializer):

    class Meta:
        model = Movie
        fields = ('id', 'backdrop_path', 'title', 'budget', 'tmdb_id', 'orginal_title', 'overview', 'poster_path',
                  'popularity', 'status', 'release_date', 'runtime', 'tagline', 'video', 'vote_count', 'vote_average')
