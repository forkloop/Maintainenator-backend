from django.conf.urls import patterns, url

urlpatterns = patterns('trackings.views',
        url(r'^$', 'index'),
        url(r'^new/$', 'new'),
        url(r'^(?P<tracking_id>\d+)/$', 'show'))
