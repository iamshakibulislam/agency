







$(document).ready(function(){


$(document).on('click','#signupbutton',function(){

var fullname=$('#fullname').val();
var company=$('#company').val();
var email=$('#email').val();
var pass1=$('#Password1').val();
var pass2=$('#Password2').val();

if($('#tos').prop('checked')==false || fullname=='' || company=='' || email=='' || pass1=='' || pass2=='' ){alert('all fields are required');}
else if(pass1 != pass2){alert('password did not match')}
else{

	$.ajax({

			type:'GET',
			dataType:'json',
			url:'/user/signup/',
			data:{fullname:fullname,company:company,email:email,password:pass1}

	})

	.done(function(data){ if(data.message=='email already exists'){alert(data.message);return false;};
				
					window.location.replace('/user/client_dashboard/');

				})

	.fail(function(data){alert('failed')});





}; //end of else statement


}); //end of signup button click




//login setup starts here

$(document).on('click','#login_button',function(){

var signin_email=$('#signin_email').val();
var signin_password=$('#signin_password').val();

if(signin_email=='' || signin_password==''){
	alert('email and password are required')
}

else{


	$.ajax({

		type:'GET',
		dataType:'json',
		data:{email:signin_email,password:signin_password},
		url:'/user/login/'
	})

	.done(function(data){ 
		if(data.login_status=='ok'){
		window.location.replace('/user/client_dashboard/')}
		else{alert('email or password is incorrect')}; })
	.fail(function(){alert('login failed')});
} ;//end of else statement



})  //


//login function ends here


//send mail function starts here

$(document).on('click','#send_mail_button',function(){


	var frommail=$('#from_email').val();
	var content=$('#email_content').val();
	if(frommail=='' || content==''){alert('content can not be blank')}
		else{
			$('#send_mail_button').text('wait');
			$.ajax({
				dataType:'json',
				type:'GET',
				data:{from_email:frommail,content:content},
				url:'/user/send_email_dashboard/'

			}) //end of ajax

			.done(function(data){
				if(data.status=='ok'){
				$('#alertmail').prepend('<div class="alert alert-success">mail has been sent</div>');
				$('#send_mail_button').text('Send');

			}
				else{
					$('#alertmail').prepend('<div class="alert alert-danger">Sorry,something went wrong</div>');
					$('#send_mail_button').text('Send');

				};
			})

			.fail(function(){

				$('#alertmail').prepend('<div class="alert alert-danger">sorry,something went wrong</div>');

			})


		};

}) ;//end of send mail function

}) //end of main document ready function