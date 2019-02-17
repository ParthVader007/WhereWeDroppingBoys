var mode = 0;
var START = 0;
var ATTACK = 1;
var STORY = 2;

var text1 = [];
var button = [];
var i = 0;

var hero;
var enemy;
// var hero_hp = 100;
// var hero_atk = 10;
// var enemy_hp = 50;
// var enemy_atk = 10;

text1[0] = "You have just woken up. You feel pain from the back of your head. As you sit up, you take a glance at your surroundings. You have almost no recollection of where you are or who you are.";
button[0] = "Get Up";

text1[1] = "Just as you gather your thoughts, an orc bursts through the trees and lets out a furious war cry. You don't understand why the orc is angry or what he has against you, but instead of trying to figure that out you grab a nearby stick and prepare for combat.";
button[1] = "Prepare for combat";

function click_handler(num) {
    switch (num) {
        case 1:
            button1();
            break;
        case 2:
            button2();
            break;
        case 3:
            button3();
            break;
        case 4:
            button4();
            break;
        default:
            console.log("Mr. Stark, I'm not feeling so good :/");
    }
}

function button1() {
    console.log(mode);
    if (mode == START) {
        hero = new Player("Player", 100, 20, 0);
        mode = STORY;
    } else if (mode == STORY) {
        document.getElementById("maintext").innerHTML = text1[i];
        document.getElementById("option1").innerHTML = button[i];
        i++;
        if (i >= text1.length) {
      	     i = 0;
             mode = ATTACK;
         }
	} else if (mode == ATTACK) {
    	document.getElementById("maintext").innerHTML = "";

        document.getElementById("orc_hp").innerHTML = "Enemy Hp: " + enemy_hp;
        document.getElementById("orc_atk").innerHTML = "Enemy Atk: " + enemy_atk;
        document.getElementById("player_hp").innerHTML = "Your HP: " + hero[health];
        document.getElementById("player_atk").innerHTML = "Your Atk: " + hero[attak];
        document.getElementById("directions").innerHTML = "What will you do?";

        document.getElementById("option1").innerHTML = "Attack";
        document.getElementById("option2").innerHTML = "Defend";
        document.getElementById("option3").innerHTML = "Escape";
        document.getElementById("option4").innerHTML = "---";

        while (hero_hp <= 0 || enemy_hp <= 0) {
            document.getElementById("maintext").innerHTML = "You did 10 damage to the orc! You took 10 damage!";
        	hero_hp -= 10;
            document.getElementById("player_hp").innerHTML = "Your HP: " + hero[health];
            enemy_hp -= 10;
            document.getElementById("orc_hp").innerHTML = "Enemy HP: " + enemy_hp;
        }
        mode = STORY;
    }
}
