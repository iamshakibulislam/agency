#from djangovalidators.validators import MimetypeValidator,FileSizeValidator
from django import forms
'''
class project_upload_form(forms.Form):
	FILE_SIZE_IN_BYTES = 1024*1024*30
	CONTENT_TYPES = ('image/png', 'application/pdf', 'image/jpeg', 'image/jpg', 'image/tiff','application/msword','video/3gpp','application/zip','application/vnd.rar','video/mp4')
    
	project_title=forms.CharField(label='project title',max_length=40,widget=forms.TextInput(attrs={'class': 'form-control'}))
	project_file=forms.FileField(validators=[FileSizeValidator(FILE_SIZE_IN_BYTES),MimetypeValidator(CONTENT_TYPES)],widget=forms.FileInput(attrs={'id': 'upload'}))
	'''