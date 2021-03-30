$(document).ready(function() {

    var url = "https://pokeapi.co.api/v2/pokemon";
    

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(150));
    };
    var rand = getRandomInt(150);

    $("#getPoke").on("click", function () {
        var num = 1;
        var htmlStr = "";

        $.get(`https://pokeapi.co/api/v2/pokemon${num}`, function (res) {
            num ++;
            htmlStr += `<img src=${res.sprites.front_default} alt='pokemon_sprite'>`;

            $("#imageSquare").append(html_Str);

        }, 'json');
    });

    $("#getRand").on("click", function () {
        $.get(`url${rand}`, function(kol) {
            html_Str += `<h1>HelloThere!</h1>`;
        }, 'json');
        $("#description").append(html_Str);
    });
});