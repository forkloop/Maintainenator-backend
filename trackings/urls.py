from django.conf.urls import patterns, url
from django.conf import settings

import logging

logger = logging.getLogger('mode.debug')

urlpatterns = patterns('trackings.views',
        url(r'^$', 'index', name='index'),
        url(r'^new/$', 'new'),
        url(r'^(?P<tracking_id>\d+)/fix/$', 'fix', name='fix'),
        url(r'^(?P<tracking_id>\d+)/$', 'show', name='show'),
)

urlpatterns += patterns('', 
        #url(r'^(?P<tracking_id>\d+)/photos/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT}),
        url(r'^photos/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT}),
        #url(r'^\d+/trackings/photos/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT}),
)
