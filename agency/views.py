from django.shortcuts import render,redirect
from user.models import User
from django.core.mail import send_mail
from django.core.mail import EmailMessage
from django.contrib import messages
def index(request):
	return render(request,'index.html')


def get_quote(request):
	if request.method == 'GET':
		return render(request,'contact.html')

	if request.method == 'POST':
		fullname = request.POST['fullname']
		email = request.POST['email']
		try:
			phone = request.POST['phone']
		except:
			phone = 'null'
			
		message = request.POST['message']
		try :

			file = request.FILES['attachment']
		except:
			pass

		mail = EmailMessage(str(fullname) +' '+ str(phone) + ' '+ str(email), message, 'admin@webheavenit.com', ['admin@webheavenit.com'])
		try:

			mail.attach(file.name, file.read(), file.content_type)

		except :

			pass

		mail.send()

		messages.info(request,'Thank you for your message . We will get back to you soon !')
		return redirect('get_quote')