from tastypie.authorization import Authorization
from tastypie.resources import ModelResource
from trackings.models import Tracking

from trackings.multipart_resource import MultipartResource

class TrackingResource(MultipartResource, ModelResource):
    class Meta:
        queryset = Tracking.objects.all()
        resource_name = 'trackings'
        authorization = Authorization()

    def obj_create(self, bundle, request, **kwargs):
        bundle_obj = super(TrackingResource, self).obj_create(bundle, request, **kwargs)
        tracking = bundle_obj.obj
        # At most 3 photos
        for i in xrange(3):
            key = 'photo' + str(i+1)
            if bundle.data.has_key(key):
                value = bundle.data.get(key)
                tracking.photo_set.create(photo=value)
            else:
                break
        return bundle_obj
