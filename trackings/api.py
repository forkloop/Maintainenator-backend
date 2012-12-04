from tastypie import fields
from tastypie.authorization import Authorization
from tastypie.resources import ModelResource
from tastypie.paginator import Paginator
from trackings.models import Tracking, Photo

from trackings.multipart_resource import MultipartResource

import hashlib

class PhotoResource(ModelResource):
    tracking = fields.ToOneField('trackings.api.TrackingResource', 'tracking')

    class Meta:
        queryset = Photo.objects.all()
        resource_name = 'photos'

# `curl -u username:password localhost:5000/api/v1/trackings/[id] to fetch the tracking`.
class TrackingResource(MultipartResource, ModelResource):
    _max_photo_num = 3
    photos = fields.ToManyField(PhotoResource, 'photo_set', full=True)

    def obj_create(self, bundle, request, **kwargs):
        # Create A tracking with ModelResource.obj_create().
        bundle_obj = super(TrackingResource, self).obj_create(bundle, request, **kwargs)
        tracking = bundle_obj.obj

        # Get the audio file.
        if bundle.data.has_key('audio'):
            value = bundle.data.get('audio')
            tracking.audio_set.create(audio=value)

        # Get at most three photos.
        for index in xrange(TrackingResource._max_photo_num):
            key = 'photo' + str(index+1)
            if bundle.data.has_key(key):
                value = bundle.data.get(key)
                tracking.photo_set.create(photo=value)
            else:
                break
        return bundle_obj

    class Meta:
        queryset = Tracking.objects.all()
        resource_name = 'trackings'
        authorization = Authorization()
        paginator_class = Paginator

    def dehydrate_pub_date(self, bundle):
        return bundle.data['pub_date'].strftime('%Y-%m-%d')

    def dehydrate_sub_email(self, bundle):
        return hashlib.md5(bundle.data['sub_email']).hexdigest()
