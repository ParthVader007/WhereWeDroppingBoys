var mode = 0;
var START = 0;
var ATTACK = 1;
var STORY = 2;
var TRANSITION = 69;
var GAMEOVER = 8

var scenario = [];
var button = [];
var i = 0;

var hero;
var enemy;
var enemy_hp;
var enemy_atk;
// var hero_hp = 100;
// var hero_atk = 10;
// var enemy_hp = 50;
// var enemy_atk = 10;

scenario[0] = "You have just woken up. You feel pain from the back of your head. As you sit up, you take a glance at your surroundings. You have almost no recollection of where you are or who you are.";
button[0] = "Get Up";

scenario[1] = "Just as you gather your thoughts, an orc bursts through the trees and lets out a furious war cry. You don't understand why the orc is angry or what he has against you, but instead of trying to figure that out you grab a nearby stick and prepare for combat.";
button[1] = "Prepare for combat";

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
        hero = new Player("Player", 120, 15, 0);
        enemy_hp = getRandomArbitrary(60, 180);
        enemy_atk = getRandomArbitrary(5, 15)
        enemy = new Enemy(enemy_hp, enemy_atk, 0);
        mode = STORY;

        document.getElementById("maintext").innerHTML = "Game Initated";
    } else if (mode == STORY) {
        document.getElementById("maintext").innerHTML = scenario[i];
        document.getElementById("option1").innerHTML = "Continue";
        i++;
        if (i >= scenario.length) {
             i = 0;
             mode = TRANSITION;
        }
    } else if (mode == TRANSITION) {
        document.getElementById("maintext").innerHTML = "Prepare for battle!";

        document.getElementById("orc_hp").innerHTML = "Enemy Hp: " + enemy.hp;
        document.getElementById("orc_atk").innerHTML = "Enemy Atk: " + enemy.atk;
        document.getElementById("player_hp").innerHTML = "Your HP: " + hero.hp;
        document.getElementById("player_atk").innerHTML = "Your Atk: " + hero.atk;
        document.getElementById("directions").innerHTML = "What will you do?";

        document.getElementById("option1").innerHTML = "Attack";
        document.getElementById("option2").innerHTML = "Defend";
        document.getElementById("option3").innerHTML = "Escape";
        document.getElementById("option4").innerHTML = "---";

        mode = ATTACK;

    } else if (mode == ATTACK) {
        document.getElementById("maintext").innerHTML = "";

        document.getElementById("orc_hp").innerHTML = "Enemy Hp: " + enemy.hp;
        document.getElementById("orc_atk").innerHTML = "Enemy Atk: " + enemy.atk;
        document.getElementById("player_hp").innerHTML = "Your HP: " + hero.hp;
        document.getElementById("player_atk").innerHTML = "Your Atk: " + hero.atk;
        document.getElementById("directions").innerHTML = "What will you do?";

        document.getElementById("option1").innerHTML = "Attack";
        document.getElementById("option2").innerHTML = "Defend";
        document.getElementById("option3").innerHTML = "Escape";
        document.getElementById("option4").innerHTML = "---";


        console.log("Inside Attack loop");
        document.getElementById("maintext").innerHTML = "You did " + hero.atk + " damage to the orc! You took " + enemy.atk + " damage!";
        hero.hp -= enemy.atk;
        document.getElementById("player_hp").innerHTML = "Your HP: " + hero.hp;
        enemy.hp -= hero.atk;
        document.getElementById("orc_hp").innerHTML = "Enemy HP: " + enemy.hp;
        console.log(hero.hp + ", " + enemy.hp);
        
        if (hero.hp <= 0) {
            document.getElementById("maintext").innerHTML = "You Lost, Game Over!";
            
            //resets the buttons
            document.getElementById("option1").innerHTML = "New Game";
            document.getElementById("option2").innerHTML = "---";
            document.getElementById("option3").innerHTML = "---";
            document.getElementById("option4").innerHTML = "---"; 

            //resets the screen
            document.getElementById("orc_hp").innerHTML = "";
            document.getElementById("orc_atk").innerHTML = "";
            document.getElementById("player_hp").innerHTML = "";
            document.getElementById("player_atk").innerHTML = "";
            document.getElementById("directions").innerHTML = "";

            mode = START;  
        }
        else if (enemy.hp <= 0) {
            document.getElementById("maintext").innerHTML = "You WIN!";
            
            //resets the buttons
            document.getElementById("option1").innerHTML = "New Game";
            document.getElementById("option2").innerHTML = "---";
            document.getElementById("option3").innerHTML = "---";
            document.getElementById("option4").innerHTML = "---"; 

            //resets the screen
            document.getElementById("orc_hp").innerHTML = "";
            document.getElementById("orc_atk").innerHTML = "";
            document.getElementById("player_hp").innerHTML = "";
            document.getElementById("player_atk").innerHTML = "";
            document.getElementById("directions").innerHTML = "";

            mode = START; 
        }

    } else if (mode == GAMEOVER) {
        document.getElementById("maintext").innerHTML = "Welcome to the Glade!";
        document.getElementById("option1").innerHTML = "Continue";
        mode = STARTGAME;
    }
}