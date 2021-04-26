from django.urls import path
from . import views
from django.views.generic import TemplateView

urlpatterns = [
    
   # path('signup/',views.signup,name='signup'),
   # path('client_dashboard/',views.client_dashboard,name='client_dashboard'),
    path('login/',views.login,name='login'),
    path('send_mail_url/',views.send_mail_url,name='send_mail_url'),
    path('logout',views.logout,name='logout'),
    #path('project/',views.project,name='project'),
    path('send_email_dashboard/',views.send_email_dashboard,name='send_mail'),
    path('about/',TemplateView.as_view(template_name='about.html'),name='about'),
    path('faq/',TemplateView.as_view(template_name='faq.html'),name='faq'),
    path('tos/',TemplateView.as_view(template_name='tos.html'),name='tos'),
    path('privacy/',TemplateView.as_view(template_name='privacy.html'),name='privacy'),
    path('contact/',TemplateView.as_view(template_name='contact.html'),name='contact')


] 