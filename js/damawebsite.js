//Custom javascript

function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: new google.maps.LatLng(51.5, -0.2),zoom: 10};
  var map = new google.maps.Map(mapCanvas, mapOptions);
}

function Email() {
<?php 
//SE IL TASTO INVIA EMAIL E' STATO CLICCATO....
if(isset($_POST['invia_mail']))
{
    $to = "[COLOR=#333333]info@prova.com[/COLOR]";  
    $subject = "Oggetto";  
    
    $body = "Contenuto del modulo:\n\n"; 
    $body .= "Nome: " . trim(stripslashes($_POST['name'])) . "\n"; 
    $body .= "email: " . trim(stripslashes($_POST['email'])) . "\n"; 
    $body .= "Oggetto: " . trim(stripslashes($_POST['subject'])) . "\n"; 
    $body .= "Messaggio: " . trim(stripslashes($_POST['message'])) . "\n"; 

    $headers = "MIME-Version: 1.0";
    $headers .= "Content-type: text/plain; charset=iso-8859-1";
    $headers .= "From: {$name} <{$from}>";
    $headers .= "Reply-To: <{$from}>";
    $headers .= "Subject: {$subject}";
    $headers .= "X-Mailer: PHP/".phpversion();

    mail($to, $subject, $body, $headers); 
    Print "<h1> Email inviata correttamente a $to </h1>";
}
?>

}