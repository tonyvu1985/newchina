<?php
	
	$to = 'support@dedicated-it.com';
	//$to = 'hoc@newchinaacupuncture.com.au';
	
	$subject = "New Enquiry Form";
	$message = "Hello! ".$_POST['name']." submit an enquiry form. His/Her phone is : ".$_POST['phone']." ,email address is : ".$_POST['email'];
	$message .= " the message is : ".$_POST['message']." and the clinic is : ".$_POST['clinic'];
	$from = "admin@newchinaacupuncture.com.au";
	$headers = "From:" . $from;
	$sent = mail($to,$subject,$message,$headers);
	if($sent) {
		header('Location: subscribed-thankyou.htm');
	}
	else {
		echo "Fail";
	}
