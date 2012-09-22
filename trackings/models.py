from django.db import models
from django.forms import ModelForm

class Tracking(models.Model):
    PHOTO_DIR = 'trackings/photos/'
    SEVERITY_LEVELS = (
            (1, 'Very severe'),
            (2, 'Severe'),
            (3, 'Fair'),
            (4, 'Can wait'),
            (5, 'Just kidding'))

    description = models.CharField(max_length=50)
    vote = models.IntegerField(editable=False, default=1)
    severity = models.IntegerField(choices=SEVERITY_LEVELS, default=1)
    photo = models.ImageField(upload_to=PHOTO_DIR, null=True, blank=True)
    latitude = models.DecimalField(max_digits=13, decimal_places=10, null=True, blank=True)
    longitude = models.DecimalField(max_digits=13, decimal_places=10, null=True, blank=True)
    location = models.CharField(max_length=100)

    def __unicode__(self):
        return u'%s : %s' % (self.description, self.photo)


class TrackingForm(ModelForm):
    class Meta:
        model = Tracking
