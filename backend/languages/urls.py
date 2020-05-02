from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()

router.register('api/languages', views.LanguageView)
router.register('api/paradigms', views.ParadigmView)
router.register('api/programmers', views.ProgrammerView)


urlpatterns = [
    path('', include(router.urls)),
]
