$(document).ready(function () {
    var start = document.getElementById("start");
    var excuse = document.getElementById("excuse");
    var enemies = document.getElementById("enemies");
    var defenderSpot = document.getElementById("defender");

    //stores id of character clicked on
    var id;
    //stores your initial attack power
    var youBase;
    //stores your attack power after each attack
    var youCurrent = 0;
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
        $("#howToStart").hide();
        $("#hero").removeAttr("hidden");

        //How do we choose our character?
        if (excuse.innerHTML === "") {
            //change classes of you and enemies
            $("#" + id).removeClass("character").addClass("you");
            $(".character").removeClass("character").addClass("enemy");


            //moves you into the "Your Excuse" spot
            $("#" + id).appendTo("#excuse");

            //moves enemies into the "Enemies Available to Attack" spot
            $(".enemy").appendTo("#enemies");


        } else { };
    });

    function defenderize() {
        id = $(this).attr("id");
        if (defenderSpot.innerHTML === "") {
            $("#" + id).removeClass("enemy").addClass("defender");
            $("#" + id).appendTo("#defender");
            $("#attack").addClass("red");
        }
    };

    //What happens when the Attack button is clicked?
    $("#attack").on("click", function () {
        youSpan = $(".you").find("span").attr("id")
        defenderSpan = $(".defender").find("span").attr("id");

        youHP = $("#" + youSpan).text();
        defenderHP = $("#" + defenderSpan).text();

        defenderName = $(".defender").attr("name");

        youBase = $(".you").attr("data-attack-power");
        youCurrent = parseInt(youCurrent) + parseInt(youBase);
        defender = $(".defender").attr("data-counter-attack-power");

        //Attack button becomes relevant only when "Defender" spot is filled
        if (defenderSpot.innerHTML != "") {
            if (youHP > 0 && defenderHP > 0) {
                //HP goes down on you
                $("#" + youSpan).text(youHP - defender);

                //HP goes down on defender
                $("#" + defenderSpan).text(defenderHP - youCurrent);

                $("p").removeAttr("hidden");
                $("#commentary").text("You attacked " + defenderName + " for " + youCurrent + " damage.");
                $("#commentary2").show().text(defenderName + " attacked you back for " + defender + ".");

                //What happens when enemy defeats you?
            } else if (youHP <= 0) {
                //text underneath says "GAME OVER"
                $("#commentary2").hide();
                $("#attack").hide();
                $("#commentary").html("<h2>GAME OVER</h2>");
                //restart button shows up
                $("#reset").removeAttr("hidden");
                //What happens when restart button is clicked?
                $("#reset").on("click", function () {
                    //page is reloaded
                    location.reload();
                });

                //What happens when enemy is defeated?
            } else if (defenderHP <= 0) {
                //text underneath says you have defeated them and to choose another enemy
                $("#commentary2").hide();
                $("#commentary").text("You have defeated " + defenderName + " choose another enemy.");
                //disappears from game
                $(".defender").hide().appendTo("#defeatedEnemies");

            }

        } else { };
    });

    //What happens when you win?
    $("body").on("click", function () {
        if (youHP > 0 && enemies.innerHTML === "" && defenderSpot.innerHTML === "") {
            $("#commentary2").hide();
            $("#attack").hide();
            //text underneath says "You Won!! GAME OVER!!!"    
            $("#commentary").html("<h2>YOU WON!!! GAME OVER.</h2>");
            //restart button shows up
            $("#reset").removeAttr("hidden");
            //What happens when restart button is clicked?
            $("#reset").on("click", function () {
                //page is reloaded
                location.reload();
            });
        }
    });

    $(document).on("click", ".enemy", defenderize);

});
