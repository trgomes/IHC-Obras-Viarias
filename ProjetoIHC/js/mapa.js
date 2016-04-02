var map;
 
function initialize() {
    var latlng = new google.maps.LatLng(-23.2214924, -45.8998116);
 
    var options = {
        zoom: 15,
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
  var contentString = '<div id="content" style="height: 350px; width: 498px;">'+
      '<img src="http://www.sjc.sp.gov.br/media/633542/kanebo2g_498x280.jpg" width="498" height="280"/> '+
      '<p style="font-size:30px; margin-top:10px;">Valor: R$ 11,5 milhões</p>'+         
      '</div>';
      
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });  
  
  var myLatLng = {lat: -23.2163266, lng: -45.8956463};
  
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
  

  // Implantação de nova via (AEROPORTO/TAMOIOS)
  var contentString2 = '<div id="content" style="height: 350px; width: 498px;">'+
      '<img src="http://www.sjc.sp.gov.br/media/631660/tamoios_498x280.jpg" width="498" height="280"/>'+
      '<p style="font-size:30px; margin-top:10px;">Valor: R$ 10 milhões</p>'+      
      '</div>';
  
  var infowindow2 = new google.maps.InfoWindow({
    content: contentString2
  }); 
  
  var myLatLng2 = {lat: -23.2193832, lng: -45.8970518};

  var marker2 = new google.maps.Marker({
    position: myLatLng2,
    map: map,
    icon: icon1,
    title: 'Implantação de nova via (AEROPORTO/TAMOIOS)'
  });

  marker2.addListener('click', function() {
    infowindow2.open(map, marker2);
  });
  // Fim AEROPORTO/TAMOIOS
  
  

//  var map = new google.maps.Map(document.getElementById("mapa"), {
//    zoom: 15,
//    center: myLatLng
//  });
// 
 

}

initialize();
initMap();




