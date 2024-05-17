from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.forms import UserCreationForm
from .forms import UserRegistrationForm

def home(request):
    return render(request, 'users/home.html')

def register(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Your account has been created. You can log in now!')
            return redirect('login')
        else:
            messages.error(request, 'Please correct the errors below.')
    else:
        form = UserRegistrationForm()
        
    context = {'form': form}
    return render(request, 'users/register.html', context)

def profile(request):
    return render(request, 'users/profile.html')

def attendance(request):
    return render(request, 'users/attendance.html')

def seatplan(request):
    return render(request, 'users/seatplan.html')

def addsubject(request):
    return render(request, 'users/addsubject.html')
