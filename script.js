$(document).ready(function() {
        // Create HTML
    var htmlImages = "";
    var htmlInfo = "";
    function createHtmlImg(x) {
        htmlImages += "<img src=" + x + " alt='characterImg'>";
        $("#imageSquare").append(htmlImages);
    };
    function createHtmlInfo(x) {
        htmlInfo = "<p class='p-2 text-light'><strong>" + x + "</strong></p>";
        $("#description").append(htmlInfo);
    };
        // function that spits out random numbers 1-150
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    };
    console.log(getRandomInt(150));
    var rand = getRandomInt(150);
    var num = 1;
        
        // First Load page with first pokemon
    $.get(`https://pokeapi.co/api/v2/pokemon/1/`, function (res) {
            createHtmlImg(res.sprites.front_default);
            createHtmlInfo(res.name);
    }, 'json');
    
    $(document).on("click", function() {
           // On Clicking of the button go to the next pokemon up, while grabbing the sprite and info
        $("#getPoke").on("click", function () {
            num ++;
            $("#imageSquare").empty();
            $("#description").empty();

            $.get(`https://pokeapi.co/api/v2/pokemon/${num}/`, function (res) {
                createHtmlImg(res.sprites.front_default);
                createHtmlInfo(res.name);
            }, 'json');
        });

            // Grab a random pokemon when clicking on getRand Button
        $("#getRand").on("click", function () {
            $("#imageSquare").empty();
            $("#description").empty();

            $.get(`https://pokeapi.co/api/v2/pokemon/${rand}/`, function(des) {
                createHtmlImg(des.sprites.front_default);
                createHtmlInfo(des.name);
            }, 'json');
            
        });

            // Search for a pokemon
        $("#searchByName").submit(function() {
            var name = $("#searchByName").val();
            $("#imageSquare").empty();
            $("#description").empty();

            $.get("https://pokeapi.co/api/v2/pokemon/" + name +"/",)
                createHtmlImg(res.sprites.front_default);
                createHtmlInfo(res.name);
            return false;
        });
        
        });
     
});

