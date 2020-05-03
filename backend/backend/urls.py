from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('languages/', include('languages.urls')),
    path('movies/', include('movies.urls')),
    path('api-auth/', include('rest_framework.urls')),
]
