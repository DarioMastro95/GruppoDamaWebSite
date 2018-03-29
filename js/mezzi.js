
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
  var descrizioni = new Array("","Miniescavatore 10qli"
                                ,"Miniescavatore 15qli"
                                ,"Escavatore 30qli"
                                ,"Escavatore 50ql"
                                ,"Autocarri 35qli e 160qli con gru"
                                ,"Autocarro 75qli"
                                ,"Autocarro 100qli con gru"
                                ,"Trattorino Alkè"
                                ,"Carrello semovente a braccio telescopico fisso (sbraccio 8mt; portata 12qli)"
                                ,"Carrello semovente a braccio telescopico fisso (sbraccio 17mt; portata 40qli)"
                                ,"Carrello semovente a braccio telescopico girevole (sbraccio 18mt; portata 50qli)"
                                ,"Accessorio per Manitou (cesta orientabile ed estensibile)"
                                ,""
                                ,""
                                ,""
                                ,"");
  for (var i = 1; i <17; i++) {
    $('#contenuto').append('<img id="'+i+'img"class="myImg " src="img/mezzi/'+i+'.jpg" alt="'+descrizioni[i]+'" width="300" height="300"><div id="'+i+'m" class="modal"><span id="span'+i+'"class="close">&times;</span><img class="modal-content img01" id="'+i+'modalimg"><div id="caption'+i+'"class="caption"></div></div>')
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
});
