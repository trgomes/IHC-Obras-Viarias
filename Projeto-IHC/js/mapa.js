// Váriáveis necessárias
var map;
var infoWindow;

function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(-23.2214924, -45.8998116),
        zoom: 12,
        mapTypeId: 'roadmap',
    };

    map = new google.maps.Map(document.getElementById('mapa'), mapOptions);

    // cria a nova Info Window com referência à variável infowindow
    // o conteúdo da Info Window será atribuído mais tarde
    infoWindow = new google.maps.InfoWindow();

    // evento que fecha a infoWindow com click no mapa
    google.maps.event.addListener(map, 'click', function () {
        infoWindow.close();
    });

    // Chamada para a função que vai percorrer a informação
    // contida na variável markersData e criar os marcadores a mostrar no mapa
    displayMarkers();
}
google.maps.event.addDomListener(window, 'load', initialize);

// Esta função vai percorrer a informação contida na variável markersData
// e cria os marcadores através da função createMarker

var icon1 = 'http://i.stack.imgur.com/rU427.png'; //verde
var icon2 = 'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png'; //amarelo
var icon3 = 'http://i.stack.imgur.com/cdiAE.png'; //vermelho

//Função que retorna a variavel que contem o endereço da imagem dos marcadores
function retorna_icon(icone){
    if(icone == "icon1")
    {
        return icon1;
    }
    else if(icone == "icon2")
    {
        return icon2;
    }
    else
    {
        return icon3;
    }
}


function displayMarkers() {


    // esta variável vai definir a área de mapa a abranger e o nível do zoom
    // de acordo com as posições dos marcadores
    //    var bounds = new google.maps.LatLngBounds();

    //Adicionado por Thiago em 11-05-2016
    $.getJSON('https://api.myjson.com/bins/1ip3e', function (dados) {
        for (var i = 0; i < dados.length; i++) {

            var latlng = new google.maps.LatLng(dados[i].Latitude, dados[i].Longitude);
            var url = dados[i].URL;
            var valor = dados[i].Valor;
            var descricao = dados[i].Descricao;
            var icone = dados[i].status;
            var titulo = dados[i].Titulo;

            createMarker(latlng, url, valor, descricao, icone, titulo);

        }
    });
    //Adicionado por Thiago em 11-05-2016

    // Depois de criados todos os marcadores
    // a API através da sua função fitBounds vai redefinir o nível do zoom
    // e consequentemente a área do mapa abrangida.
    map.fitBounds(bounds);
}

// Função que cria os marcadores e define o conteúdo de cada Info Window.
function createMarker(latlng, url, valor, descricao, icone, titulo) {
    var marker = new google.maps.Marker({
        map: map,
        position: latlng,
        icon: retorna_icon(icone),
        title: titulo
    });

    // Evento que dá instrução à API para estar alerta ao click no marcador.
    // Define o conteúdo e abre a Info Window.
    google.maps.event.addListener(marker, 'click', function () {

        var estruturaHtml = '<div id="content" style="height: 390px; width: 498px;">' +
                '<img src="' + url + '" width="498" height="280"/>' +
                '<p style="font-size:14px; margin-top:10px;"> Valor: ' + valor + '</p>' +
                '<p style="font-size:14px;">Descrição: ' + descricao + '</p>' +
                '</div>';
        
        // O conteúdo da variável iwContent é inserido na Info Window.
        infoWindow.setContent(estruturaHtml);

        // A Info Window é aberta.
        infoWindow.open(map, marker);
    });
}