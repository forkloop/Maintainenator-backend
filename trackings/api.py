from tastypie.authorization import Authorization
from tastypie.resources import ModelResource
from trackings.models import Tracking

from trackings.multipart_resource import MultipartResource

class TrackingResource(MultipartResource, ModelResource):
    class Meta:
        queryset = Tracking.objects.all()
        resource_name = 'trackings'
        authorization = Authorization()
