//Custom javascript

function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: new google.maps.LatLng(51.5, -0.2),zoom: 10};
  var map = new google.maps.Map(mapCanvas, mapOptions);
}


$(function() {

$("#contactForm input,#contactForm textarea").jqBootstrapValidation({
preventSubmit: true,
submitError: function($form, event, errors) {
// additional error messages or events
},
submitSuccess: function($form, event) {
event.preventDefault(); // prevent default submit behaviour
// get values from FORM
var name = $("input#name").val();
var email = $("input#email").val();
var message = $("textarea#message").val();
var firstName = name; // For Success/Failure Message
// Check for white space in name for Success/Fail message
if (firstName.indexOf(' ') >= 0) {
firstName = name.split(' ').slice(0, -1).join(' ');
}
$.ajax({
url: "././mail/contact_me.php",  //script php
type: "POST",
data: {
name: name,
email: email,
message: message
},
cache: false,
success: function(response) {
console.log(response);
// Success message
$('#success').html("<div class='alert alert-success'>");
    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
        .append("</button>");
    $('#success > .alert-success')
    .append("<strong>Your message has been sent. </strong>");
    $('#success > .alert-success')
    .append('</div>');

//clear all fields
$('#contactForm').trigger("reset");
},
error: function() {
// Fail message
$('#success').html("<div class='alert alert-danger'>");
    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
        .append("</button>");
    $('#success > .alert-danger').append($("<strong>").text(" We're sorry, there seems to have been a problem with sending your message. We ask you to try again in a few minutes."));
        $('#success > .alert-danger').append('</div>');
//clear all fields
$('#contactForm').trigger("reset");
},
});
},
filter: function() {
return $(this).is(":visible");
},
});

$("a[data-toggle=\"tab\"]").click(function(e) {
e.preventDefault();
$(this).tab("show");
});
});
/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
$('#success').html('');
});


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