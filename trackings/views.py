from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.http import Http404
from django.core.urlresolvers import reverse
from django.shortcuts import render
from django.shortcuts import render_to_response

from trackings.models import Tracking, TrackingForm

def index(request):
    trackings_list = Tracking.objects.all()
    return render_to_response('tracking_index.html', {'trackings_list' : trackings_list})

def new(request):
    if request.method == 'POST':
        form = TrackingForm(request.POST, request.FILES)
        if form.is_valid():
            tracking = form.save()
            return HttpResponseRedirect(reverse('trackings.views.show', args=[tracking.pk]))
    else:
        form = TrackingForm()
    return render(request, 'trackings_new.html', {'form': form})

def show(request, tracking_id):
    return HttpResponse('Tracking %s' % tracking_id)
    try:
        tracking = Tracking.objects.get(pk=tracking_id)
    except Tracking.DoesNotExist:
        raise Http404
