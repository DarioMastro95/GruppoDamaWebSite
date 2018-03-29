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
function showimg(modalId,imgId,modalImgId,captionId,spanId) {
  // Get the modal
  var modal = document.getElementById(modalId);

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById(imgId);
  var modalImg = document.getElementById(modalImgId);
  var captionText = document.getElementById(captionId);
  img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
  }

  // Get the <span> element that closes the modal

  // When the user clicks on <span> (x), close the modal
  document.getElementById(spanId).onclick = function() {
      modal.style.display = "none";
  }
}
$(document).ready(function() {
  for (var i = 1; i <51; i++) {
    $('#contenuto').append('<img id="'+i+'img"class="myImg " src="img/galleria/galleria/'+i+'.jpg" alt="" width="300" height="300"><div id="'+i+'m" class="modal"><span id="span'+i+'"class="close">&times;</span><img class="modal-content img01" id="'+i+'modalimg"><div id="caption'+i+'"class="caption"></div></div>')
  }

  showimg("1m","1img","1modalimg","caption1","span1");
  showimg("2m","2img","2modalimg","caption2","span2");
  showimg("3m","3img","3modalimg","caption3","span3");
  showimg("4m","4img","4modalimg","caption4","span4");
  showimg("5m","5img","5modalimg","caption5","span5");
  showimg("6m","6img","6modalimg","caption6","span6");
  showimg("7m","7img","7modalimg","caption7","span7");
  showimg("8m","8img","8modalimg","caption8","span8");
  showimg("9m","9img","9modalimg","caption9","span9");
  showimg("10m","10img","10modalimg","caption10","span10");
  showimg("11m","11img","11modalimg","caption11","span11");
  showimg("12m","12img","12modalimg","caption12","span12");
  showimg("13m","13img","13modalimg","caption13","span13");
  showimg("14m","14img","14modalimg","caption14","span14");
  showimg("15m","15img","15modalimg","caption15","span15");
  showimg("16m","16img","16modalimg","caption16","span16");
  showimg("17m","17img","17modalimg","caption17","span17");
  showimg("18m","18img","18modalimg","caption18","span18");
  showimg("19m","19img","19modalimg","caption19","span19");
  showimg("20m","20img","20modalimg","caption20","span20");
  showimg("21m","21img","21modalimg","caption21","span21");
  showimg("22m","22img","22modalimg","caption22","span22");
  showimg("23m","23img","23modalimg","caption23","span23");
  showimg("24m","24img","24modalimg","caption24","span24");
  showimg("25m","25img","25modalimg","caption25","span25");
  showimg("26m","26img","26modalimg","caption26","span26");
  showimg("27m","27img","27modalimg","caption27","span27");
  showimg("28m","28img","28modalimg","caption28","span28");
  showimg("29m","29img","29modalimg","caption29","span29");
  showimg("30m","30img","30modalimg","caption30","span30");
  showimg("31m","31img","31modalimg","caption31","span31");
  showimg("32m","32img","32modalimg","caption32","span32");
  showimg("33m","33img","33modalimg","caption33","span33");
  showimg("34m","34img","34modalimg","caption34","span34");
  showimg("35m","35img","35modalimg","caption35","span35");
  showimg("36m","36img","36modalimg","caption36","span36");
  showimg("37m","37img","37modalimg","caption37","span37");
  showimg("38m","38img","38modalimg","caption38","span38");
  showimg("39m","39img","39modalimg","caption39","span39");
  showimg("40m","40img","40modalimg","caption40","span40");
  showimg("41m","41img","41modalimg","caption41","span41");
  showimg("42m","42img","42modalimg","caption42","span42");
  showimg("43m","43img","43modalimg","caption43","span43");
  showimg("44m","44img","44modalimg","caption44","span44");
  showimg("45m","45img","45modalimg","caption45","span45");
  showimg("46m","46img","46modalimg","caption46","span46");
  showimg("47m","47img","47modalimg","caption47","span47");
  showimg("48m","48img","48modalimg","caption48","span48");
  showimg("49m","49img","49modalimg","caption49","span49");
  showimg("50m","50img","50modalimg","caption50","span50");

});
