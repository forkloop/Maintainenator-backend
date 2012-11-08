from django.core.mail import send_mail
from django.db.models.signals import post_save, Signal
from django.dispatch import receiver
import datetime
from django.db import models
from django.forms import ModelForm
from celery import task

import sys
import logging
logger = logging.getLogger('mode.debug')

class Tracking(models.Model):
    SEVERITY_LEVELS = (
            (1, 'Very severe'),
            (2, 'Severe'),
            (3, 'Fair'),
            (4, 'Can wait'),
            (5, 'Just kidding'))

    description = models.CharField(max_length=100)
    severity = models.IntegerField(choices=SEVERITY_LEVELS, default=1)
    latitude = models.DecimalField(max_digits=13, decimal_places=10, null=True, blank=True)
    longitude = models.DecimalField(max_digits=13, decimal_places=10, null=True, blank=True)
    building = models.CharField(max_length=20, blank=True)
    floor = models.IntegerField(null=True, blank=True)
    room = models.CharField(blank=True, max_length=10)
    location = models.CharField(blank=True, max_length=100)
    fixed = models.BooleanField(default=False)
    #TODO remove indoor field
    indoor = models.BooleanField(default=True)
    pub_date = models.DateTimeField(default=datetime.datetime.now)

    def __unicode__(self):
        return u'%s : %s' % (self.description, self.location)

    @staticmethod
    def autocomplete_search_fields():
        pass

class Photo(models.Model):
    #XXX move to settings
    PHOTO_DIR = 'trackings/photos/'
    tracking = models.ForeignKey(Tracking)
    photo = models.ImageField(upload_to=PHOTO_DIR)

    def __unicode__(self):
        return u'%s' % self.photo.url

    #def get_absolute_url(self):

class TrackingForm(ModelForm):
    class Meta:
        model = Tracking

class PhotoForm(ModelForm):
    class Meta:
        model = Photo
        fields = ('photo',)

@task(ignore_result=True)
def send_thanks_email(updated_instance_pk):
    try:
        logger.debug('Updating tracking: ' + str(updated_instance_pk))
        tracking = Tracking.objects.get(pk=updated_instance_pk)
        if tracking.fixed:
            #TODO customize email content
            send_mail('Issue fixed', 'Thank you!', 'forkloop.dev@gmail.com', ['forkloop@gmail.com'])
    except:
        logger.error(sys.exc_info()[0])

@receiver(post_save, sender=Tracking)
def send_thanks_email_wrapper(sender, **kwargs):
    """
    **kwargs:
        instance              The instance of model be saved.
        created               Whether this instance was created.
        updated_fields        Which fields are updated, only when specify explicitly in `save()`.
    """
    try:
        updated_instance_pk = kwargs.get('instance').pk
        send_thanks_email.delay(updated_instance_pk)
    except:
        logger.error(sys.exc_info()[0])
