from django.db import models
from django.forms import ModelForm

class Tracking(models.Model):
    SEVERITY_LEVELS = (
            (1, 'Very severe'),
            (2, 'Severe'),
            (3, 'Fair'),
            (4, 'Can wait'),
            (5, 'Just kidding'))

    description = models.CharField(max_length=100)
    vote = models.IntegerField(editable=False, default=1)
    severity = models.IntegerField(choices=SEVERITY_LEVELS, default=1)
    latitude = models.DecimalField(max_digits=13, decimal_places=10, null=True, blank=True)
    longitude = models.DecimalField(max_digits=13, decimal_places=10, null=True, blank=True)
    building = models.CharField(max_length=20, blank=True)
    floor = models.IntegerField(null=True, blank=True)
    room = models.CharField(blank=True, max_length=10)
    location = models.CharField(blank=True, max_length=100)
    fixed = models.BooleanField(editable=False, default=False)
    indoor = models.BooleanField(default=True)

    def __unicode__(self):
        return u'%s : %s' % (self.description, self.location)

class Photo(models.Model):
    #XXX move to settings
    PHOTO_DIR = 'trackings/photos/'
    tracking = models.ForeignKey(Tracking)
    photo = models.ImageField(upload_to=PHOTO_DIR)

    def __unicode__(self):
        return u'%s' % self.photo.url

class TrackingForm(ModelForm):
    class Meta:
        model = Tracking

class PhotoForm(ModelForm):
    class Meta:
        model = Photo
        fields = ('photo',)
