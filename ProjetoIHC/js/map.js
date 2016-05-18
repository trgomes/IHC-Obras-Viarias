// *
// * Adicionar multiplos marcadores
// * 2013 - www.marnoto.com
// *

// Váriáveis necessárias
var map;
var infoWindow;

// A variável markersData guarda a informação necessária a cada marcador
// Para utilizar este código basta alterar a informação contida nesta variável
//var markersData = [
//   {
//      lat: 40.6386333,
//      lng: -8.745,
//      nome: "Parque de Campismo Praia da Barra",
//      morada1:"Rua Diogo Cão, 125",
//      morada2: "Praia da Barra",
//      codPostal: "3830-772 Gafanha da Nazaré" // não colocar virgula no último item de cada maracdor
//   },
//   {
//      lat: 40.59955,
//      lng: -8.7498167,
//      nome: "Parque de Campismo da Costa Nova",
//      morada1:"Quinta dos Patos, n.º 2",
//      morada2: "Praia da Costa Nova",
//      codPostal: "3830-453 Gafanha da Encarnação" // não colocar virgula no último item de cada maracdor
//   },
//   {
//      lat: 40.6247167,
//      lng: -8.7129167,
//      nome: "Parque de Campismo da Gafanha da Nazaré",
//      morada1:"Rua dos Balneários do Complexo Desportivo",
//      morada2: "Gafanha da Nazaré",
//      codPostal: "3830-225 Gafanha da Nazaré" // não colocar virgula no último item de cada maracdor
//   } // não colocar vírgula no último marcador
//];



function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(-23.2214924, -45.8998116),
        zoom: 12,
        mapTypeId: 'roadmap',
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

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
function displayMarkers() {

    // esta variável vai definir a área de mapa a abranger e o nível do zoom
    // de acordo com as posições dos marcadores
    var bounds = new google.maps.LatLngBounds();

    // Loop que vai estruturar a informação contida em markersData
    // para que a função createMarker possa criar os marcadores 
//    for (var i = 0; i < markersData.length; i++) {
//
//        var latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
//        var nome = markersData[i].nome;
//        var morada1 = markersData[i].morada1;
//        var morada2 = markersData[i].morada2;
//        var codPostal = markersData[i].codPostal;
//
//        createMarker(latlng, nome, morada1, morada2, codPostal);
//
//        // Os valores de latitude e longitude do marcador são adicionados à
//        // variável bounds
//        bounds.extend(latlng);
//    }

    //Adicionado por Thiago em 11-05-2016
    $.getJSON('https://api.myjson.com/bins/1ip3e', function (dados) {
        for (var i = 0; i < dados.length; i++) {

//            var teste = '<div id="content" style="height: 390px; width: 498px;">' +
//                    '<img src="' + dados[i].URL + '" width="498" height="280"/>' +
//                    '<p style="font-size:14px; margin-top:10px;"> Valor: ' + dados[i].Valor + '</p>' +
//                    '<p style="font-size:14px;">Descrição:' + dados[i].Descricao + '</p>' +
//                    '</div>';
            var latlng = new google.maps.LatLng(dados[i].Latitude, dados[i].Longitude);
            var url = dados[i].URL;
            var valor = dados[i].Valor;
            var descricao = dados[i].Descricao;
            var icone = dados[i].status;
            var titulo = dados[i].Titulo;

//            $(document.body).append(teste);

            createMarker(latlng, url, valor, descricao, icone, titulo);
            
            bounds.extend(latlng);

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
        title: titulo
    });

    // Evento que dá instrução à API para estar alerta ao click no marcador.
    // Define o conteúdo e abre a Info Window.
    google.maps.event.addListener(marker, 'click', function () {

        // Variável que define a estrutura do HTML a inserir na Info Window.
//        var iwContent = '<div id="iw_container">' +
//                '<div class="iw_title">' + nome + '</div>' +
//                '<div class="iw_content">' + morada1 + '<br />' +
//                morada2 + '<br />' +
//                codPostal + '</div></div>';
        var estruturaHtml = '<div id="content" style="height: 390px; width: 498px;">' +
                '<img src="' + url + '" width="498" height="280"/>' +
                '<p style="font-size:14px; margin-top:10px;"> Valor: ' + valor + '</p>' +
                '<p style="font-size:14px;">Descrição:' + descricao + '</p>' +
                '</div>';
        

        // O conteúdo da variável iwContent é inserido na Info Window.
        infoWindow.setContent(estruturaHtml);

        // A Info Window é aberta.
        infoWindow.open(map, marker);
    });
}