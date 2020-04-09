from django.shortcuts import render,redirect
from user.models import User
from django.core.mail import send_mail

def index(request):
	return render(request,'index.html')

def contact_form(request):
	emailad=request.POST['emailex']
	phone=request.POST['phonex']
	message=request.POST['messagex']

	if emailad=='' or phone=='' or message=='':
		return render(request,'contact.html',{'messages':1})

	else:
		send_mail(emailad+'  and phone:'+phone,message,'shakibulbd2000@gmail.com',['shakil4cash@gmail.com'],fail_silently=False)
		return render(request,'contact.html',{'messages':2})
