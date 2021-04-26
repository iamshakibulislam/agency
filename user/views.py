from django.shortcuts import render,redirect
from user.models import User
from django.http import JsonResponse,HttpResponseRedirect
from django.contrib import auth
from django.contrib.auth.decorators import login_required
#from .forms import project_upload_form
from .models import *
import urllib
from django.core.mail import send_mail
from django.conf import settings

'''
def signup(request):
	fullname=request.GET['fullname']
	company=request.GET['company']
	email=request.GET['email']
	password=request.GET['password']

	try:
		check=User.objects.get(email=email)
		return JsonResponse({'message':'email already exists'})
	except User.DoesNotExist:
		User.objects.create_user(full_name=fullname,company=company,email=email,password=password)

		authen=auth.authenticate(request,email=email,password=password)

		if authen is not None:
			auth.login(request,authen)
			return JsonResponse({'message':'successful'})
		else:
			return render(request,'index.html')

@login_required(login_url='/')
def client_dashboard(request):
	up_form=project_upload_form()
	return render(request,'client_dashboard.html',{'up_form':up_form})

'''
def login(request):
	email=request.GET['email']
	password=request.GET['password']

	authenticate=auth.authenticate(request,email=email,password=password)
	if authenticate is not None:
		auth.login(request,authenticate)
		return JsonResponse({'login_status':'ok'})
	else:
		return JsonResponse({'login_status':'failed'})



def send_mail_url(request):
	return render(request,'send_mail.html')


def logout(request):
	auth.logout(request)
	return redirect('/')

'''
def project(request):
	if request.method=='POST':
		if 'message' in request.session:
			del request.session['message']
		myform=project_upload_form(request.POST,request.FILES)
		if myform.is_valid():
			title=myform.cleaned_data['project_title']
			uploaded_file=myform.cleaned_data['project_file']
			myclient=request.user

			filemodel=project_files()
			filemodel.client=myclient
			filemodel.project_title=title
			filemodel.file=uploaded_file
			filemodel.save()
			up_form=project_upload_form()

			request.session['message']='project uploaded successfully! we will get back you soon'

			return redirect('/user/client_dashboard')

		else:
			request.session['message']='failed! try again'
			up_form=project_upload_form()
			return redirect('/user/client_dashboard')

'''

def send_email_dashboard(request):
	subject=request.user.full_name+' email: '+request.user.email
	from_email=request.GET['from_email']
	message=request.GET['content']
	recipient_list=['shakil4cash@gmail.com']
	#send_mail('subject','message','shakibulbd2000@gmail.com',['shakil4cash@gmail.com'],fail_silently=False)
	send_mail(subject,message,from_email,recipient_list,fail_silently=False)
	
	return JsonResponse({'status':'ok'})






		

		

	

		


