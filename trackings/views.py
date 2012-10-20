from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.http import Http404
from django.conf import settings
from django.core.context_processors import csrf
from django.core.urlresolvers import reverse
from django.shortcuts import render
from django.shortcuts import render_to_response
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from trackings.models import Tracking, TrackingForm, PhotoForm

import logging
logger = logging.getLogger('mode.debug')

def index(request):
    trackings_list = Tracking.objects.all()
    paginator = Paginator(trackings_list, 20)

    page = request.GET.get('page')
    logger.debug('Requesting page: ' + str(page))
    try:
        trackings = paginator.page(page)
    except PageNotAnInteger:
        trackings = paginator.page(1)
    except EmptyPage:
        trackings = paginator.page(paginator.num_pages)
    return render_to_response('tracking_index.html', {'trackings': trackings, 'user': request.user})

def new(request):
    c = {}
    if request.method == 'POST':
        tracking_form = TrackingForm(request.POST)
        if tracking_form.is_valid():
            tracking = tracking_form.save()
            #XXX At most 3 photos
            for i in xrange(len(request.FILES)):
                if i == 0:
                    tracking.photo_set.create(photo=request.FILES['photo'])
                else:
                    tracking.photo_set.create(photo=request.FILES['extra_photo' + str(i)])
            logger.debug('Created tracking: ' + str(tracking.pk))
            return HttpResponseRedirect(reverse('tracking:show', args=[tracking.pk]))
    else:
        tracking_form = TrackingForm()
        c.update(csrf(request))
    c['tracking_form'] = tracking_form
    photo_form = PhotoForm()
    c['photo_form'] = photo_form
    return render(request, 'trackings_new.html', c)

def show(request, tracking_id):
    try:
        tracking = Tracking.objects.get(pk=tracking_id)
    except Tracking.DoesNotExist:
        raise Http404
    # tracking = get_object_or_404(Tracking, pk=tracking_id)
    return render(request, 'trackings_show.html', {'tracking': tracking, 'user': request.user, 'base_url': settings.BASE_URL})

# ajax request
def fix(request, tracking_id):
    if request.is_ajax() and request.method == 'POST':
        try:
            tracking = Tracking.objects.get(pk=tracking_id)
        except Tracking.DoesNotExist:
            raise Http404
        update_status = request.POST['fixed']
        old_status = str(tracking.fixed).lower()
        if update_status != old_status:
            if update_status == 'true':
                message = 'true'
                tracking.fixed = True
            else: 
                message = 'false'
                tracking.fixed = False
            tracking.save()
        else:
            message = 'unchanged'
        return HttpResponse(message)
    else:
        raise Http404
