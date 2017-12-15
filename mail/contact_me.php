<?php
define('DOMAIN', 'zanini-esc.com');

// Check for empty fields
if(empty($_POST['name'])      ||
    empty($_POST['email'])     ||
    empty($_POST['message'])   ||
    !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
{
    echo "No arguments Provided!";
    return false;
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$message = strip_tags(htmlspecialchars($_POST['message']));

// Create the email and send the message
$email_subject = "Richiesta di contatto da:  $name";
$email_body = "Hai ricevuto un nuovo messaggio dal form di contatti del tuo sito.\n\n"."Ecco di dettagli:\n\nNome: $name\n\nEmail: $email_address\n\nMessaggio:\n$message";
$headers = "From: contatto-sito@".DOMAIN."\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";

mail('d.mastromarco@gmail.com',$email_subject,$email_body,$headers);
return true;
?>