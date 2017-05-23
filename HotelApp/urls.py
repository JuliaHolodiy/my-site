from django.conf.urls import patterns, include, url
from django.contrib import admin
from registr.views import RegisterFormView

urlpatterns = [
    # Examples:
    # url(r'^$', 'HotelApp.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^register/$', RegisterFormView.as_view()),
]