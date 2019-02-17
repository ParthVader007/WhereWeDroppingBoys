var mode = 0;
var START = 0;
var ATTACK = 1;
var STORY = 2;
var text1 = [];
var button = [];
var i = 0;

var hero_hp = 100;
var hero_atk = 10;
var enemy_hp = 50;
var enemy_atk = 10;

text1[0] = "You have just woken up. You feel pain from the back of your head. As you sit up, you take a glance at your surroundings. You have almost no recollection of where you are or who you are.";
button[0] = "Get Up";

text1[1] = "Just as you gather your thoughts, an orc bursts through the trees and lets out a furious war cry. You don't understand why the orc is angry or what he has against you, but instead of trying to figure that out you grab a nearby stick and prepare for combat.";
button[1] = "Prepare for combat";

var hero = create_unit("Hero", 100, 20, 0);

function create_unit(name, health, attack, defense) {
    var unit = {};
    unit.name = name;
    unit.health = health;
    unit.attack = attack;
    unit.defense = defense;

    unit.take_damage = function(enemy_attack) {
        var damage = enemy_attack - 0.1 * unit.defense;
        if (damage < 0)
        {
          damage = 0;
        }
        unit.health = unit.health - damage;
    }

    unit.take_reduced_damage = function(enemy_attack) {
        var damage = enemy_attack - unit.defense;
        if (damage < 0)
        {
          damage = 0;
        }
        unit.health = unit.health - damage;
    }

    unit.set_info = function(name, health, attack, defense) {
        unit.name = name;
        unit.health = health;
        unit.attack = attack;
        unit.defense = defense;
    }

    return unit;
}

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
        document.getElementById("maintext").innerHTML = text1[i];
        document.getElementById("button1").innerHTML = button[i];
        i++;
        if (i >= text1.length) {
      	     i = 0;
             mode = 1;
         }
	} else if (mode == ATTACK) {
    	document.getElementById("maintext").innerHTML = "";

        document.getElementById("orc_hp").innerHTML = "Enemy Hp: " + enemy_hp;
        document.getElementById("orc_atk").innerHTML = "Enemy Atk: " + enemy_atk;
        document.getElementById("player_hp").innerHTML = "Your HP: " + hero_hp;
        document.getElementById("player_atk").innerHTML = "Your Atk: " + hero_atk;
        document.getElementById("directions").innerHTML = "What will you do?";

        document.getElementById("button1").innerHTML = "Attack";
        document.getElementById("button2").innerHTML = "Defend";
        document.getElementById("button3").innerHTML = "Escape";
        document.getElementById("button4").innerHTML = "---";
    	mode = 2;
    } else if (mode == 2) {
    	document.getElementById("maintext").innerHTML = "You did 10 damage to the orc! You took 10 damage!";
    	hero_hp -= 10;
        document.getElementById("player_hp").innerHTML = "Your HP: " + hero_hp;
        enemy_hp -= 10;
        document.getElementById("orc_hp").innerHTML = "Enemy HP: " + enemy_hp;
    }
}
else if (mode==3) {
    getElementById('button1').innerHTML= "Trade" + option;
    getElementById('button2').innerHTML= "Defend";
    getElementById('button3').innerHTML= "Run";
    getElementById('button4').innerHTML= "Hide";
  }
//died
else if (mode==4) {
    getElementById('button1').innerHTML= "Reincarnate";
    getElementById('button2').innerHTML= "Quit";
    getElementById('button3').innerHTML= "Feels Bad";
    getElementById('button4').innerHTML= "Update High Score";
  }
  //win
  else if (mode==5) {
    getElementById('button1').innerHTML= "Play Again";
    getElementById('button2').innerHTML= "Quit";
    getElementById('button3').innerHTML= "Feels Good";
    getElementById('button4').innerHTML= "Update High Score";
  }
