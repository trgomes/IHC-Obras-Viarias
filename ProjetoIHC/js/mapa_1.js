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

    $.getJSON('https://api.myjson.com/bins/1ip3e', function (dados) {
        for (var i = 0; i < dados.length; i++) {

            $.getJSON('https://api.myjson.com/bins/1ip3e', function (dados) {
                for (var i = 0; i < dados.length; i++) {

                    var teste = '<div id="content" style="height: 390px; width: 498px;">' +
                            '<img src="' + dados[i].URL + '" width="498" height="280"/>' +
                            '<p style="font-size:14px; margin-top:10px;"> Valor: ' + dados[i].Valor + '</p>' +
                            '<p style="font-size:14px;">Descrição:' + dados[i].Descricao + '</p>' +
                            '</div>';

                    $(document.body).append(teste);

                }
            });

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            var myLatLng = {lat: $(document.body).append(dados[i].Latitude), lng: $(document.body).append(dados[i].Longitude)};

            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                icon: $(document.body).append(dados[i].status),
                title: $(document.body).append(dados[i].Titulo)
            });

            marker.addListener('click', function () {
                infowindow.open(map, marker);
            });


        }
    });

}

initialize();
initMap();