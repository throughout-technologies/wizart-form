from django.urls import path
from drowsiness.views import *

urlpatterns = [
    path("",index,name="home"),
    path("detect",detect,name="detect")
]
