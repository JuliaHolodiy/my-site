from django.conf.urls import url, include
from . import views
from registr.views import RegisterFormView

urlpatterns = [
    # url(r'^$', RegisterFormView.as_view()),
    url(r'^register/$', RegisterFormView.as_view()),
    url(r'^$', 'HotelApp.views.home', name='home'),
]
