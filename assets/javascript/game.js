$(document).ready(function () {
    var start = document.getElementById("start");
    var excuse = document.getElementById("excuse");
    var enemies = document.getElementById("enemies");
    var defenderSpot = document.getElementById("defender");

    //stores id of character clicked on
    var id;
    //stores your initial attack power
    var you;
    //stores your attack power after each attack
    var youIncrease;
    //stores defender counter attack power
    var defender;
    //stores the name of the current defender
    var defenderName;
    //stores the id of the span where your HP is displayed
    var youSpan;
    //stores the id of the span where defender counter attack power is displayed
    var defenderSpan;
    //stores the text inside span displaying your HP
    var youHP;
    //stores the text inside span displaying defender HP
    var defenderHP;


    //How do we start the game?
    $(".character").on("click", function () {
        id = $(this).attr("id");

        //How do we choose our character?
        if (excuse.innerHTML === "") {
            //change classes of you and enemies
            $("#" + id).removeClass("character").addClass("you");
            $(".character").addClass("enemy");


            //moves you into the "Your Excuse" spot
            $("#" + id).appendTo("#excuse");

            //moves enemies into the "Enemies Available to Attack" spot
            $(".character").appendTo("#enemies");

        //What happens when an enemy character is picked to fight?
        } else if (defenderSpot.innerHTML === "") {
            //moves picked defender into "Defender" spot
            $("#" + id).removeClass("enemy").addClass("defender");
            $("#" + id).appendTo("#defender");

        } else {};
    });

    //What happens when the Attack button is clicked?
    $("#attack").on("click", function () {
        youSpan = $(".you").find("span").attr("id")
        defenderSpan = $(".defender").find("span").attr("id");

        youHP = $("#" + youSpan).text();
        defenderHP = $("#" + defenderSpan).text();

        defenderName = $(".defender").attr("name");

        //Attack button becomes relevant only when "Defender" spot is filled
        if (defenderSpot.innerHTML != "") {
            you = $(".you").attr("data-attack-power");
            youIncrease = 
            defender = $(".defender").attr("data-counter-attack-power");

            //NEED to put value in a variable maybe? to keep track of points they're at?
            //HP goes down on you
            $("#" + youSpan).text(youHP - defender);

            //HP goes down on defender
            $("#" + defenderSpan).text(defenderHP - you);

            //your attack power increases by how much your base attack power is
            //keep attack power at highest point achieved

            $("p").removeAttr("hidden");
            $(".defenderName").text(defenderName);
            //text underneath shows how many points you attacked enemy with
            $("#youAttack").text();
            //text underneath shows how many points enemy attacked you with
            $("#defenderAttack").text(defender);

        } else { };
    });

    

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