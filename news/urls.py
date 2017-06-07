from django.conf.urls import patterns, include, url

urlpatterns = patterns('news.views',
    url(r'^$', 'news', name='news'),
    url(r'^(?P<post_id>\d+)/$', 'one_new', name='one_new'),
)