from django.conf.urls import patterns, url
from django.conf import settings

import logging

logger = logging.getLogger('mode.debug')

logger.debug(settings.MEDIA_URL)

urlpatterns = patterns('trackings.views',
        url(r'^$', 'index', name='tracking-list'),
        url(r'^new/$', 'new'),
        url(r'^(?P<tracking_id>\d+)/$', 'show', name='tracking-detail'),
)

urlpatterns += patterns('', 
        ##url(r'^(?P<tracking_id>\d+)/photos/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT}),
        url(r'^\d+/trackings/photos/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT}),
)
