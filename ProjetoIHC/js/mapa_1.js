var map;
 
function initialize() {
    var latlng = new google.maps.LatLng(-23.2214924, -45.8998116);
 
    var options = {
        zoom: 12,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    map = new google.maps.Map(document.getElementById("mapa"), options);    

}
 
function initMap() {
  
  var icon1 = 'http://i.stack.imgur.com/rU427.png'; //verde
  var icon2 = 'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png'; //amarelo
  var icon3 = 'http://i.stack.imgur.com/cdiAE.png'; //vermelho
  
  
  //string com formatação das informacoes, imagens e valores das obras
  
  //Duplicação do Viaduto Kanebo no sentido centro
  var contentString = '<div id="content" style="height: 390px; width: 498px;">'+
      '<img src="http://www.sjc.sp.gov.br/media/633542/kanebo2g_498x280.jpg" width="498" height="280"/> '+
      '<p style="font-size:14px; margin-top:10px;">Valor: R$ 11,5 milhões</p>'+ 
      '<p style="font-size:14px;">Descrição: Duplicação do Viaduto Kanebo no sentido centro </p>'+
      '</div>';
      
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });  
  
  var myLatLng = {lat: -23.221308, lng: -45.900910};
  
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: icon1,
    title: 'Duplicação do Viaduto Kanebo no sentido centro'
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  // Fim Kanebo

}

initialize();
initMap();