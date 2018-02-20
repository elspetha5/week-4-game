$(document).ready(function () {
    var start = document.getElementById("start");
    var character = document.getElementById("netflix");

    var attackPower = character.getAttribute("data-attack-power");
    var counterPower = character.getAttribute("data-data-counter-attack-power");

    var excuse = document.getElementById("excuse");
    var enemies = document.getElementById("enemies");
    var attack = document.getElementById("attack");
    var defender = document.getElementById("defender");

    var id;

    console.log(attackPower);


    //What happens when a character is clicked on?
    $(".character").on("click", function () {
        if (excuse.innerHTML === "") {
            id = $(this).attr("id");

            $("#" + id).removeClass("character");
            $("#" + id).addClass("you");
            $(".character").addClass("enemy");

            //that character pops into the "Your Character" spot
            $("#" + id).appendTo("#excuse");

            //other characters pop into the "Enemies Available to Attack" spot
            $(".character").appendTo("#enemies");
        } else { };
    });


    //change background color

    //What happens when an enemy character is picked?
    //that character pops into "Defender" spot
    //change bakcground color
    //Attack button becomes relevant

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