$(document).ready(function () {
    var start = document.getElementById("start");
    //var character = document.querySelectorAll("netflix, tired, book, outside");

    //var attackPower = character[i].getAttribute("data-attack-power");
    //var counterPower = character.getAttribute("data-data-counter-attack-power");

    var excuse = document.getElementById("excuse");
    var enemies = document.getElementById("enemies");
    //var attackBtn = document.getElementById("attack");
    var defenderSpot = document.getElementById("defender");

    var id;
    var you;
    var defender;
    var youSpan;
    var defenderSpan;
    var youHP;
    var defenderHP;

    function HP(x) {
        var value = idHP.attr("value");
        idHP.text(value);
    };


    //How do we start the game?
    $(".character").on("click", function () {
        //stores id of character clicked on
        id = $(this).attr("id");

        //How do we choose our character?
        if (excuse.innerHTML === "") {
            //changes classes of us and enemies
            $("#" + id).removeClass("character").addClass("you");
            $(".character").addClass("enemy");


            //our character pops into the "Your Excuse" spot
            $("#" + id).appendTo("#excuse");

            //other characters pop into the "Enemies Available to Attack" spot
            $(".character").appendTo("#enemies");

            //What happens when an enemy character is picked?
            //that character pops into "Defender" spot
        } else if (defenderSpot.innerHTML === "") {
            $("#" + id).removeClass("enemy").addClass("defender");
            $("#" + id).appendTo("#defender");
        }
    });


    $("#attack").on("click", function () {
        youSpan = $(".you").find("span").attr("id")
        defenderSpan = $(".defender").find("span").attr("id");
        console.log(youSpan, defenderSpan);

        youHP = $("#" + youSpan).attr("value");
        defenderHP = $("#" + defenderSpan).attr("value");
        console.log(youHP, defenderHP);

        //Attack button becomes relevant only when "Defender" spot is filled
        if (defenderSpot.innerHTML != "") {
            console.log("clicked attack");

            you = $(".you").attr("data-attack-power");
            defender = $(".defender").attr("data-counter-attack-power");
            console.log(you, defender);

            $("#" + youSpan).text(youHP - defender);
            $("#" + defenderSpan).text(defenderHP - you);

        } else { };
    });


    //What happens when the Attack button is clicked?
    //text underneath shows how many points you attacked enemy with
    //text underneath shows how many points enemy attacked you with
    //HP goes down on you
    //HP goes down on character
    //your attack power increases by how much your base attack power is
    //store that in a variable
    //keep attack power at highest point achieved
    //can only attack when an enemy is in the "Defender" spot

    //What happens when enemy defeats you?
    //text underneath says "GAME OVER"
    //restart button shows up
    //Attack button can't be clicked any more

    //What happens when restart button is clicked?
    //page is refreshed

    //What happens when enemy is defeated?
    //disappears from game
    //text underneath says you have defeated them and to choose another enemy

    //What happens when you win?
    //text underneath says "You Won!! GAME OVER!!!"
    //restart button appears

});