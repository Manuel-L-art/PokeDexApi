$(document).ready(function() {
        // Create HTML
    var htmlImages = "";
    var htmlInfo = "";
    function createHtmlImg(x) {
        htmlImages += "<img src=" + x + " alt='characterImg'>";
        $("#imageSquare").html(htmlImages);
    };
    function createHtmlInfo(y) {
        htmlInfo = "<p class='p-2 text-light'><strong>" + y + "</strong></p>";
        $("#description").html(htmlInfo);
    };
        // function that spits out random numbers 1-150
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    };
    
    // console.log(getRandomInt(150));
    
    var num = 1;
        
        // First Load page with first pokemon
    $.get(`https://pokeapi.co/api/v2/pokemon/${num}/`, function (res) {
            createHtmlImg(res.sprites.front_default);
            createHtmlInfo(res.name);
            
    }, 'json');

    // $(document).on("click", function() {
    //     $("#imageSquare").empty();
    //     $("#description").empty();
    // });
    // Grab a random pokemon when clicking on getRand Button
    $("#getRand").click(function () {
        $("#imageSquare").empty();
        $("#description").empty();
        getRandomInt(150);
        var rand = getRandomInt(150);
        $.get(`https://pokeapi.co/api/v2/pokemon/${rand}/`, function(des) {
            createHtmlImg(des.sprites.front_default);
            createHtmlInfo(des.name);
            console.log(des.name);
        });
        
    });
    // On Clicking of the button go to the next pokemon up, while grabbing the sprite and info
    $("#getPoke").click( function () {
        num++;
        $("#imageSquare").empty();
        $("#description").empty();
        console.log(num);

        $.get(`https://pokeapi.co/api/v2/pokemon/${num}/`, function (yes) {
            
            createHtmlImg(yes.sprites.front_default);
            createHtmlInfo(yes.name);
            // console.log(yes.name)
        }, 'json');
    });
        // Search for a pokemon
        $("#searchByName").submit(function() {
            //  var name = $("#searchByName").formInteract();
            var xy = document.getElementById("form").text();
            $("#imageSquare").empty();
            $("#description").empty();

              $.get("https://pokeapi.co/api/v2/pokemon/" + xy +"/",function (joy){
                 createHtmlImg(joy.sprites.front_default);
                 createHtmlInfo(joy.name);
                 console.log(xy);

                },'json');
             
            // return false;
        });
     
});

