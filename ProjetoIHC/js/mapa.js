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
 
initialize();


function carregarPontos() {
 
    $.getJSON('js/pontos.json', function(pontos) {
 
        $.each(pontos, function(index, ponto) {
 
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(ponto.Latitude, ponto.Longitude),
                title: "Meu ponto personalizado! :-D",
                map: map
            });
 
        });
 
    });
 
}
 
carregarPontos();

var marker = new google.maps.Marker({
    position: new google.maps.LatLng(ponto.Latitude, ponto.Longitude),
    title: "Meu ponto personalizado! :-D",
    map: map,
    icon: 'img/marcador.png'
});


