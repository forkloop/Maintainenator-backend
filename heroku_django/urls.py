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
    url(r'^$', 'heroku_django.views.index', name='index'),
    url(r'^login/$', 'heroku_django.views.login_view', name='login'),
    url(r'^logout/$', 'heroku_django.views.logout_view', name='logout'),

    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^about/$', 'heroku_django.views.about', name='about'),
    url(r'^trackings/', include('trackings.urls', namespace='tracking')),

    # api
    url(r'^api/', include(v1_api.urls)),
)
