var mode = 0;
var START = 0;
var ATTACK = 1;
var STORY = 2;
var END = 3;

var hero;
var enemy;

function start_game() {
    document.getElementById("maintext").innerHTML = "Fort Knight?";
}

function click_handler(num) {
    switch (num) {
        case 1:
            update_mode();
            button1();
            break;
        case 2:
            update_mode();
            button2();
            break;
        case 3:
            update_mode();
            button3();
            break;
        case 4:
            update_mode();
            button4();
            break;
        default:
            console.log("Mr. Stark, I'm not feeling so good :/");
    }
}

function create_units(player_name) {
    hero = new Player("Player", 100, 20, 0);
    enemy = new Enemy(50, 10, 0);
}

function update_mode() {
    if (mode == START) {
        create_units("Player");
        mode = STORY;
    }
}

function button1() {
    console.log(mode);
    if (mode == STORY) {
        document.getElementById("maintext").innerHTML = scenario[i];
        document.getElementById("option1").innerHTML = button[i];
        i++;
        if (i >= scenario.length) {
      	     i = 0;
             mode = ATTACK;
         }
	} else if (mode == ATTACK) {
        document.getElementsByClassName("combat-contain").style.display = "inline";
    	document.getElementById("maintext").innerHTML = "";

        document.getElementById("orc_hp").innerHTML = "Enemy Hp: " + enemy.hp;
        document.getElementById("orc_atk").innerHTML = "Enemy Atk: " + enemy.atk;
        document.getElementById("player_hp").innerHTML = "Your HP: " + hero.hp;
        document.getElementById("player_atk").innerHTML = "Your Atk: " + hero.atk;
        document.getElementById("directions").innerHTML = "What will you do?";

        update_buttons("Attack", "Defend", "Escape", "---");

        console.log(hero.hp + ", " + enemy.hp);
        if (hero.hp > 0 && enemy.hp > 0) {
            console.log("Inside Attack loop");
            document.getElementById("maintext").innerHTML = "You did " + hero.atk + " damage to the orc! You took " + enemy.atk + " damage!";
        	hero.hp -= enemy.atk;
            document.getElementById("player_hp").innerHTML = "Your HP: " + hero.hp;
            enemy.hp -= hero.atk;
            document.getElementById("orc_hp").innerHTML = "Enemy HP: " + enemy.hp;
            console.log(hero.hp + ", " + enemy.hp);
            if (enemy.hp <= 0) {
                document.getElementById("maintext").innerHTML = "You killed the enemy!";
                update_buttons("Continue", "---", "---", "---");
                mode = STORY;
            } else if (player.hp <= 0) {
                document.getElementById("maintext").innerHTML = "You have died :(";
                mode = END;
            }
        }
    } else if (mode == END) {
        update_buttons();
    }
}

function update_buttons(opt1, opt2, opt3, opt4) {
    document.getElementById("option1").innerHTML = opt1;
    document.getElementById("option2").innerHTML = opt2;
    document.getElementById("option3").innerHTML = opt3;
    document.getElementById("option4").innerHTML = opt4;
}
