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
  

  // Implantação de nova via (AEROPORTO/TAMOIOS)
  var contentString2 = '<div id="content" style="height: 390px; width: 498px;">'+
      '<img src="http://www.sjc.sp.gov.br/media/631660/tamoios_498x280.jpg" width="498" height="280"/>'+
      '<p style="font-size:14px; margin-top:10px;">Valor: R$ 10 milhões</p>'+
      '<p style="font-size:14px;">Descrição: Implantação de nova via em parceria com o governo do Estado (investimento municipal)</p>'+
      '</div>';
  
  var infowindow2 = new google.maps.InfoWindow({
    content: contentString2
  }); 
  
  var myLatLng2 = {lat: -23.227582, lng: -45.872471};

  var marker2 = new google.maps.Marker({
    position: myLatLng2,
    map: map,
    icon: icon1,
    title: 'Via Aeroporto / Tamoios'
  });

  marker2.addListener('click', function() {
    infowindow2.open(map, marker2);
  });
  // Fim AEROPORTO/TAMOIOS
  
  //Prolongamento da Via Oeste até o Jardim Limoeiro (3,2 km)
   var contentString3 = '<div id="content" style="height: 390px; width: 498px;">'+
      '<img src="http://www.sjc.sp.gov.br/media/631723/viaoeste_498x280.jpg" width="498" height="280"/>'+
      '<p style="font-size:14px; margin-top:10px;">Valor: R$ 1.8 milhões</p>'+
      '<p style="font-size:14px"> Descrição: Prolongamento da Via Oeste até o Jardim Limoeiro (3,2 km) </p>'+
      '</div>';
  
  var infowindow3 = new google.maps.InfoWindow({
    content: contentString3
  }); 
  
  var myLatLng3 = {lat: -23.241637, lng: -45.938168};

  var marker3 = new google.maps.Marker({
    position: myLatLng3,
    map: map,
    icon: icon2,
    title: 'Prolongaento da via oeste'
  });

  marker3.addListener('click', function() {
    infowindow3.open(map, marker3);
  });  
  //Fim Prolongamento da Via Oeste até o Jardim Limoeiro (3,2 km)
  
  
  //Drenagem e Pavimentação da Av João Batista Ortiz Monteiro (LIGAÇÃO CASSIANO RICARDO A VIA OESTE)
  var contentString4 = '<div id="content" style="height: 390px; width: 498px;">'+
      '<img src="http://www.sjc.sp.gov.br/media/637134/img_20160125_163047904_hdr_373x280.jpg" width="498" height="280"/>'+
      '<p style="font-size:14px; margin-top:10px;"> Valor: R$ 1,8 milhão</p>'+ 
      '<p style="font-size:14px"> Descrição: Drenagem e Pavimentação da Av João Batista Ortiz Monteiro (LIGAÇÃO CASSIANO RICARDO A VIA OESTE)</p>'+
      '</div>';
  
  var infowindow4 = new google.maps.InfoWindow({
    content: contentString4
  }); 
  
  var myLatLng4 = {lat: -23.215814, lng: -45.917451};

  var marker4 = new google.maps.Marker({
    position: myLatLng4,
    map: map,
    icon: icon2,
    title: 'Ligação Cassiano Ricardo A Via Oeste'
  });

  marker4.addListener('click', function() {
    infowindow4.open(map, marker4);
  });  
  //Fim Drenagem e Pavimentação da Av João Batista Ortiz Monteiro (LIGAÇÃO CASSIANO RICARDO A VIA OESTE)
  
  //Drenagem e pavimentação de todas as 28 ruas (Bairro Pousada do Vale)
  var contentString5 = '<div id="content" style="height: 390px; width: 498px;">'+
      '<img src="http://www.sjc.sp.gov.br/media/631407/f00027014g_498x280.jpg" width="498" height="280"/>'+
      '<p style="font-size:14px; margin-top:10px;">Valor: R$ 15.5 milhões</p>'+
      '<p style="font-size:14px"> Descrição: Drenagem e pavimentação de todas as 28 ruas (Bairro Pousada do Vale) </p>'+
      '</div>';
  
  var infowindow5 = new google.maps.InfoWindow({
    content: contentString5
  }); 
  
  var myLatLng5 = {lat: -23.1837478, lng: -45.8902316 };

  var marker5 = new google.maps.Marker({
    position: myLatLng5,
    map: map,
    icon: icon2,
    title: 'Bairro Pousada do Vale'
  });

  marker5.addListener('click', function() {
    infowindow5.open(map, marker5);
  }); 
  //Fim Drenagem e pavimentação de todas as 28 ruas (Bairro Pousada do Vale)
  
  //AVENIDA LINDAURA APARECIDA FERREIRA DE SOUZA
  var contentString6 = '<div id="content" style="height: 390px; width: 498px;">'+
      '<img src="http://www.sjc.sp.gov.br/media/633231/lindaura4_500x334.jpg" width="498" height="280"/>'+
      '<p style="font-size:14px; margin-top:10px;">Valor: R$ 2.5 milhões</p>'+
      '<p style="font-size:14px">Descrição: Drenagem e Pavimentação que vai permitir a ligação da Via Dutra ao Galo Branco</p>'+
      '</div>';
  
  var infowindow6 = new google.maps.InfoWindow({
    content: contentString6
  }); 
  
  var myLatLng6 = {lat: -23.135795, lng: -45.764505 };

  var marker6 = new google.maps.Marker({
    position: myLatLng6,
    map: map,
    icon: icon3,
    title: 'Avenida Lindaura Apareceida Ferreira de Souza'
  });

  marker6.addListener('click', function() {
    infowindow6.open(map, marker6);
  });  
  //Fim AVENIDA LINDAURA APARECIDA FERREIRA DE SOUZA
  
  //PORTAL DO CÉU
  var contentString7 = '<div id="content" style="height: 390px; width: 498px;">'+
      '<img src="http://www.sjc.sp.gov.br/media/633323/portal_mg_0114_500x333.jpg" width="498" height="280"/>'+
      '<p style="font-size:14px; margin-top:10px;">Valor: R$ 3 milhões</p>'+
      '<p style="font-size:14px"> Descrição: Drenagem e pavimentação da Estrada do Bom Retiro a Estrada do Quebra Eixo (2,1 km)</p>'+
      '</div>';
  
  var infowindow7 = new google.maps.InfoWindow({
    content: contentString7
  }); 
  
  var myLatLng7 = {lat: -23.202219, lng: -45.769260 };

  var marker7 = new google.maps.Marker({
    position: myLatLng7,
    map: map,
    icon: icon2,
    title: 'Portal do Céu'
  });

  marker7.addListener('click', function() {
    infowindow7.open(map, marker7);
  }); 
  //Fim PORTAL DO CÉU
  
  //JARDIM MAJESTIC
  var contentString8 = '<div id="content" style="height: 390px; width: 498px;">'+
      '<img src="http://www.sjc.sp.gov.br/media/637164/img_20160125_111146161_373x280.jpg" width="498" height="280"/>'+
      '<p style="font-size:14px; margin-top:10px;"> Valor: R$ 2.9 milhões</p>'+
      '<p style="font-size:14px"> Descrição: Drenagem e pavimentação da Est. do Quebra Eixo a R. Guaramirim (2,5 km)</p>'+
      '</div>';
  
  var infowindow8 = new google.maps.InfoWindow({
    content: contentString8
  }); 
  
  var myLatLng8 = {lat: -23.194532, lng: -45.759355 };

  var marker8 = new google.maps.Marker({
    position: myLatLng8,
    map: map,
    icon: icon2,
    title: 'Jardim Majestic'
  });

  marker8.addListener('click', function() {
    infowindow8.open(map, marker8);
  });
  // Fim JARDIM MAJESTIC
  
  //BAIRRO DOS FREITAS
  var contentString9 = '<div id="content" style="height: 390px; width: 498px;">'+
      '<img src="http://www.sjc.sp.gov.br/media/633318/4%C2%B0travessa__(2)_498x330.jpg" width="498" height="280"/>'+
      '<p style="font-size:14px; margin-top:10px;">Valor: R$ 1,5 milhão</p>'+
      '<p style="font-size:14px"> Descrição: Pavimentação do corredor de ônibus do bairro (Quarta Travessa)</p>'+
      '</div>';
  
  var infowindow9 = new google.maps.InfoWindow({
    content: contentString9
  }); 
  
  var myLatLng9 = {lat: -23.153924, lng: -45.908564 };

  var marker9 = new google.maps.Marker({
    position: myLatLng9,
    map: map,
    icon: icon2,
    title: 'Bairro dos Freitas'
  });

  marker9.addListener('click', function() {
    infowindow9.open(map, marker9);
  });
  //Fim BAIRRO DOS FREITAS
  
  //SANTA HERMÍNIA
  var contentString11 = '<div id="content" style="height: 390px; width: 498px;">'+
      '<img src="http://www.sjc.sp.gov.br/media/631285/f00025255g_498x280.jpg" width="498" height="280"/>'+
      '<p style="font-size:14px; margin-top:10px;">Valor: R$ 6,47 milhão</p>'+
      '<p style="font-size:14px"> Descrição: Drenagem e pavimentação de todas as ruas do bairro</p>'+
      '</div>';
  
  var infowindow11 = new google.maps.InfoWindow({
    content: contentString11
  }); 
  
  var myLatLng11 = {lat: -23.214451, lng: -45.783679 };

  var marker11 = new google.maps.Marker({
    position: myLatLng11,
    map: map,
    icon: icon1,
    title: 'Santa Hermínia'
  });

  marker11.addListener('click', function() {
    infowindow11.open(map, marker11);
  });
  //Fim SANTA HERMÍNIA
  
  
  //SANTA MARIA
  var contentString12 = '<div id="content" style="height: 390px; width: 498px;">'+
      '<img src="http://www.sjc.sp.gov.br/media/631280/f00024790g_498x280.jpg" width="498" height="280"/>'+
      '<p style="font-size:14px; margin-top:10px;">Valor: R$ 5,1 milhão</p>'+
      '<p style="font-size:14px">Descrição: Drenagem e pavimentação de todas as ruas do bairro </p>'+
      '</div>';
  
  var infowindow12 = new google.maps.InfoWindow({
    content: contentString12
  }); 
  
  var myLatLng12 = {lat: -23.180791, lng: -45.786108 };

  var marker12 = new google.maps.Marker({
    position: myLatLng12,
    map: map,
    icon: icon1,
    title: 'Santa Maria'
  });

  marker12.addListener('click', function() {
    infowindow12.open(map, marker12);
  });
  //Fim SANTA MARIA
  
  //CHÁCARAS ARAÚJO
  var contentString13 = '<div id="content" style="height: 390px; width: 498px;">'+
      '<img src="http://www.sjc.sp.gov.br/media/631290/f00027450g_498x280.jpg" width="498" height="280"/>'+
      '<p style="font-size:14px; margin-top:10px;"> Valor: R$ 2,33 milhões</p>'+
      '<p style="font-size:14px"> Descrição: Pavimentação de todas as ruas do bairro</p>'+
      '</div>';
  
  var infowindow13 = new google.maps.InfoWindow({
    content: contentString13
  }); 
  
  var myLatLng13 = {lat: -23.187544, lng: -45.799820 };

  var marker13 = new google.maps.Marker({
    position: myLatLng13,
    map: map,
    icon: icon1,
    title: 'Chácaras Araújo'
  });

  marker13.addListener('click', function() {
    infowindow13.open(map, marker13);
  });
  //Fim CHÁCARAS ARAÚJO
  
  //RECANTO DOS EUCALIPTOS
  var contentString14 = '<div id="content" style="height: 390px; width: 498px;">'+
      '<img src="http://www.sjc.sp.gov.br/media/631402/f00023825g_498x280.jpg" width="498" height="280"/>'+
      '<p style="font-size:14px; margin-top:10px;">Valor: R$ 660 mil</p>'+
      '<p style="font-size:14px">Descrição: Galeria e pavimentação de todas as ruas do bairro (PCM)</p>'+
      '</div>';
  
  var infowindow14 = new google.maps.InfoWindow({
    content: contentString14
  }); 
  
  var myLatLng14 = {lat: -23.224003, lng: -45.835866 };

  var marker14 = new google.maps.Marker({
    position: myLatLng14,
    map: map,
    icon: icon1,
    title: 'Recanto dos Eucaliptos'
  });

  marker14.addListener('click', function() {
    infowindow14.open(map, marker14);
  });
  //Fim RECANTO DOS EUCALIPTOS
  
  
  //RIO COMPRIDO
  var contentString14 = '<div id="content" style="height: 390px; width: 498px;">'+
      '<img src="http://www.sjc.sp.gov.br/media/631718/riocomprido_500x375.jpg" width="498" height="280"/>'+
      '<p style="font-size:14px; margin-top:10px;"> Valor: R$ 600 mil</p>'+
      '<p style="font-size:14px">Descrição: Drenagem e pavimentação da Margina B e Rua 2 </p>'+
      '</div>';
  
  var infowindow14 = new google.maps.InfoWindow({
    content: contentString14
  }); 
  
  var myLatLng14 = {lat: -23.256260, lng: -45.944155};

  var marker14 = new google.maps.Marker({
    position: myLatLng14,
    map: map,
    icon: icon1,
    title: 'Rio Comprido'
  });

  marker14.addListener('click', function() {
    infowindow14.open(map, marker14);
  });
  //Fim RIO COMPRIDO
  
  //NOVA REPÚBLICA
  var contentString15 = '<div id="content" style="height: 390px; width: 498px;">'+
      '<img src="http://www.sjc.sp.gov.br/media/631718/riocomprido_500x375.jpg" width="498" height="280"/>'+
      '<p style="font-size:14px; margin-top:10px;"> Valor: R$ 2,88 milhões</p>'+
      '<p style="font-size:14px"> Descrição: Drenagem e pavimentação de 21 ruas do bairro em parceria com a comunidade </p>'+
      '</div>';
  
  var infowindow15 = new google.maps.InfoWindow({
    content: contentString15
  }); 
  
  var myLatLng15 = {lat: -23.288315, lng: -45.901559};

  var marker15 = new google.maps.Marker({
    position: myLatLng15,
    map: map,
    icon: icon1,
    title: 'Jardim Nova República'
  });

  marker15.addListener('click', function() {
    infowindow15.open(map, marker15);
  });
  //Fim NOVA REPÚBLICA
  

  //CAMPOS DE SÃO JOSÉ
  var contentString16 = '<div id="content" style="height: 390px; width: 498px;">'+
      '<img src="http://www.sjc.sp.gov.br/media/633338/campos3_500x333.jpg" width="498" height="280"/>'+
      '<p style="font-size:14px; margin-top:10px;"> Valor: R$ 1,26 milhão</p>'+
      '<p style="font-size:14px"> Descrição: Drenagem e pavimentação em sete vias do bairro (2,6 km) em parceria com a comunidade </p>'+
      '</div>';
  
  var infowindow16 = new google.maps.InfoWindow({
    content: contentString16
  }); 
  
  var myLatLng16 = {lat: -23.216645, lng: -45.808812};

  var marker16 = new google.maps.Marker({
    position: myLatLng16,
    map: map,
    icon: icon1,
    title: 'Campos de São José'
  });

  marker16.addListener('click', function() {
    infowindow16.open(map, marker16);
  });
  //CAMPOS DE SÃO JOSÉ
   
  

//  var map = new google.maps.Map(document.getElementById("mapa"), {
//    zoom: 15,
//    center: myLatLng
//  });
// 
 

}

initialize();
initMap();




