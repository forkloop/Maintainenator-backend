from django.conf.urls import patterns, include, url
from django.conf import settings
from trackings.api import TrackingResource

from tastypie.api import Api

v1_api = Api(api_name='v1')
v1_api.register(TrackingResource())
#tracking_resource = TrackingResource()

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    url(r'^$', 'django.views.generic.simple.direct_to_template', {'template': 'index.html'}),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),
    url(r'^trackings/', include('trackings.urls')),
    #url(r'^api/', include(tracking_resource.urls)),
    url(r'^api/', include(v1_api.urls)),
)
