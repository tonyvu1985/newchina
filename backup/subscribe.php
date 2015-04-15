<?php
	
	//$to = 'support@dedicated-it.com';
//	$to = 'hoc@newchinaacupuncture.com.au';
	$to = 'tony.vu@mytraining.net';
	
	$subject = "New Enquiry Form";
	$message = "Hello! ".$_POST['name']." successfully submitted an enquiry form. His/Her phone is : ".$_POST['phone']." ,email address is : ".$_POST['email'];
	$message .= " the message is : ".$_POST['message']." and the clinic is : ".$_POST['clinic'];
	$from = "admin@newchinaacupuncture.com.au";
	$headers = "From:" . $from;
	$sent = mail($to,$subject,$message,$headers);
	if($sent) {
		$to = $_POST['email'];
		$subject = "Thank you";
		$message = "Hello! ".$_POST['name']." we have received your enquiry. Your phone is : ".$_POST['phone']." ,your email address is : ".$_POST['email'];
		$message .= " the message is : ".$_POST['message']." and the clinic is : ".$_POST['clinic'];
		$from = "admin@newchinaacupuncture.com.au";
		$headers = "From:" . $from;
		$sent = mail($to,$subject,$message,$headers);
		
		
		header('Location: subscribed-thankyou.htm');
	}
	else {
		echo "Fail";
	}
