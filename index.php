<?php
	if ($_POST["submit"] && $_POST["email"] !== "") {
		$email = "vamsikrishna@mitaoe.ac.in";
		$subject = $_POST["subject"];
		$from = $_POST["email"];
		$name = $_POST["name"];
		$textarea = $_POST["textarea"];
		$body = "Name: $name\nFrom: $from\nSubject: $subject\nMessage: $textarea";
		if ( mail($email, $subject, $body, "From: $name <$from>") )
		{
			$thankYou="<p>Thank you! Your message has been sent. We will get back soon.</p>";
		}
	}
?>