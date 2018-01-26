//Custom javascript

function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: new google.maps.LatLng(51.5, -0.2),zoom: 10};
  var map = new google.maps.Map(mapCanvas, mapOptions);
}
function Email() {
  var email = "info@gruppodama.it";
  var name = document.getElementById("name").value;
  var oggetto = document.getElementById("oggetto").value;
  var messaggio =name+": "+ document.getElementById("message").value;

  if ((email.indexOf("@") == (-1)) || (email == "") || (email == "undefined")) {
    alert("Inserire un indirizzo email valido.");
    document.email.focus();
  }
  else if ((oggetto == "") || (oggetto == "undefined")) {
    alert("Inserire un oggetto.");
    document.oggetto.focus();
  }
  else if ((messaggio == "") || (messaggio == "undefined")) {
    alert("Inserire un messaggio.");
    document.messaggio.focus();
  }
  else {
    location.href = "mailto:" + email + "?Subject=" + oggetto + "&Body=" + messaggio;
  }
}




$('#myCarousel').carousel({
  pause: true,
  interval: false
});

// handles the carousel thumbnails
$('[id^=carousel-selector-]').click( function(){
  var id_selector = $(this).attr("id");
  var id = id_selector.substr(id_selector.lastIndexOf("-")+1);
  id = parseInt(id);
  $('#myCarousel').carousel(id);
  $('[id^=carousel-selector-]').removeClass('selected');
  $(this).addClass('selected');
});
/*
// when the carousel slides, auto update
<$('#myCarousel').on('slid', function (e) {
  var id = $('.item.active').data('slide-number');
    id = parseInt(id);
  $('[id^=carousel-selector-]').removeClass('selected');
  $('[id=carousel-selector-'+id+']').addClass('selected');
});*/
