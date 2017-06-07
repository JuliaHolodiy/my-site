from django.conf.urls import patterns, include, url
from django.contrib import admin
from registr.views import RegisterFormView
from registr.views import LoginFormView


urlpatterns = [
    # Examples:
    # url(r'^$', 'HotelApp.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^$', 'HotelApp.views.home', name='home'),
    url(r'^news/', include('news.urls', namespace='news')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^register/$', RegisterFormView.as_view()),
    url(r'^login/$', LoginFormView.as_view()),
    url(r'^exit/$', LoginFormView.as_view()),
]