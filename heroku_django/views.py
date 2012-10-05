from django.contrib.auth import login, authenticate
from django.contrib.auth import logout
from django.http import HttpResponseRedirect
from django.core.urlresolvers import reverse
from django.shortcuts import render
from django.shortcuts import render_to_response
import logging

def index(request):
    return render_to_response('index.html', {'user': request.user})

def about(request):
    return render_to_response('about.html', {'user': request.user})

def login_view(request):
    if request.user.is_authenticated():
        return HttpResponseRedirect(reverse('tracking:index'))
    else:
        if request.method == 'POST':
            username = request.POST['username']
            password = request.POST['password']
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return HttpResponseRedirect(reverse('tracking:index'))
            else:
                return render(request, 'login.html', {'error_msg': 'Invalid username or password!'})
        else:
            return render(request, 'login.html')

def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse('index'))
