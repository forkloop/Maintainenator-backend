import datetime
from django.db import models
from django.contrib.auth.models import User
from trackings.models import Tracking

class Log(models.Model):
    user = models.ForeignKey(User, default=User.objects.get(pk=1))
    tracking = models.ForeignKey(Tracking)
    logging = models.CharField(max_length=200)
    pub_date = models.DateTimeField(default=datetime.datetime.now)
