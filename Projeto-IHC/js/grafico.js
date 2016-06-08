
//$.getJSON('https://api.myjson.com/bins/1bp9k', function (dados) {

    var options = {
        responsive: true
    };

    var data = [
        {
            value: 1,
            color: "#FF0033",
            highlight: "#FF7F7F",
            label: "Obras Paradas (R$ 2,5 Milhões)"
        },
        {
            value: 9,
            color: "#339933",
            highlight: "#6FA574",
            label: "Finalizadas (R$ 47,8 Milhões)"
        },
        {
            value: 6,
            color: "#FFFF33",
            highlight: "#FFE97F",
            label: "Em Andamento (R$ 26,5 Milhões)"
        }
    ]

    window.onload = function () {

        var ctx = document.getElementById("GraficoPizza").getContext("2d");
        var PizzaChart = new Chart(ctx).Pie(data, options);
    }

//});