<?php
	
	$to = 'charlie@dedicated-it.com';
	$subject = "Subscribe to Newsletter";
	$message = "Hello! ".$_POST['name']." would like to subscribe to your newsletter. His/Her email address is ".$_POST['email'];
	$from = "admin@newchinaacupuncture.com.au";
	$headers = "From:" . $from;
	$sent = mail($to,$subject,$message,$headers);
	if($sent) {
		header('Location: subscribed-thankyou.htm');
	}
	else {
		echo "Fail";
	}
