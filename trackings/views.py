from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.http import Http404
from django.core.context_processors import csrf
from django.core.urlresolvers import reverse
from django.shortcuts import render
from django.shortcuts import render_to_response
from django.template import RequestContext

from trackings.models import Tracking, TrackingForm

import logging

logger = logging.getLogger('mode.debug')


def index(request):
    trackings_list = Tracking.objects.all()
    return render_to_response('tracking_index.html', {'trackings_list' : trackings_list})

def new(request):
    c = {}
    if request.method == 'POST':
        form = TrackingForm(request.POST, request.FILES)
        if form.is_valid():
            tracking = form.save()
            logger.debug('Processing ' + str(tracking.pk))
            return HttpResponseRedirect(reverse('trackings.views.show', args=[tracking.pk]))
    else:
        form = TrackingForm()
        c.update(csrf(request))
    c['form'] = form
    return render(request, 'trackings_new.html', c)

def show(request, tracking_id):
    try:
        tracking = Tracking.objects.get(pk=tracking_id)
    except Tracking.DoesNotExist:
        raise Http404
    # tracking = get_object_or_404(Tracking, pk=tracking_id)
    return render_to_response('trackings_show.html', {'tracking': tracking}, context_instance=RequestContext(request))

def img(request, path):
    return HttpResponse(path)
