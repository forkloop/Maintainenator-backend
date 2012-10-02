from tastypie.resources import ModelResource
from trackings.models import Tracking

class TrackingResource(ModelResource):
    class Meta:
        queryset = Tracking.objects.all()
        resource_name = 'trackings'
        authorization = Authorization()
