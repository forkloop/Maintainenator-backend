from django.conf.urls import patterns, url
from django.conf import settings

import logging

logger = logging.getLogger('mode.debug')

urlpatterns = patterns('trackings.views',
        url(r'^$', 'index', name='index'),
        url(r'^new/$', 'new'),
        #url(r'^(?P<tracking_id>\d+)/fix/$', 'fix', name='fix'),
        url(r'^(?P<tracking_id>\d+)/$', 'show', name='show'),
        # backbone
        url(r'^backbone/$', 'backbone', name='backbone')
)

urlpatterns += patterns('', 
        url(r'^photos/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.PHOTO_ROOT}),
)
