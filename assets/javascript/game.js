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
            $("#attack").addClass("red");


        } else { };
    });

    //What happens when the Attack button is clicked?
    $("#attack").on("click", function () {
        console.log("attack click")
        youSpan = $(".you").find("span").attr("id")
        defenderSpan = $(".defender").find("span").attr("id");

        youHP = $("#" + youSpan).text();
        defenderHP = $("#" + defenderSpan).text();

        defenderName = $(".defender").attr("name");

        youBase = $(".you").attr("data-attack-power");
        youCurrent = parseInt(youCurrent) + parseInt(youBase); 
        defender = $(".defender").attr("data-counter-attack-power");
        console.log(youBase, youCurrent)

        //Attack button becomes relevant only when "Defender" spot is filled
        if (defenderSpot.innerHTML != "") {
            if (youHP > 0 && defenderHP > 0) {
                //HP goes down on you
                $("#" + youSpan).text(youHP - defender);

                //HP goes down on defender
                $("#" + defenderSpan).text(defenderHP - youCurrent);

                //your attack power increases by how much your base attack power is
                //keep attack power at highest point achieved

                $("p").removeAttr("hidden");
                $("#commentary").text("You attacked " + defenderName + " for " + youCurrent + " damage.");
                $("#commentary2").show().text(defenderName + " attacked you back for " + defender + ".");

                //What happens when enemy defeats you?
            } else if (youHP <= 0) {
                //text underneath says "GAME OVER"
                $("#commentary2").hide();
                $("#commentary").text("GAME OVER");
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
            //text underneath says "You Won!! GAME OVER!!!"    
            $("#commentary").text("YOU WON!!!! GAME OVER");
            //restart button shows up
            $("#reset").removeAttr("hidden");
            //What happens when restart button is clicked?
            $("#reset").on("click", function () {
                //page is reloaded
                location.reload();
            });
        }
    });

});

//set it in 2 variables
// at start have base attack power and current attack power; current += base