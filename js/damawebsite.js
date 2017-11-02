//Custom javascript

function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: new google.maps.LatLng(51.5, -0.2),zoom: 10};
  var map = new google.maps.Map(mapCanvas, mapOptions);
}

function Email() {
  $nome_mittente = document.getElementById("form_name");
  $mail_mittente = document.getElementById("form_email");
  $mail_destinatario = "d.mastromarco@hotmail.com";

 mail($mail_destinatario, "Oggetto\r\n", "Linea 1\nLinea 2\nLinea 3\r\n");

}