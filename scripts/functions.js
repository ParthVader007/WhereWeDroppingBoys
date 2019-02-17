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

function start_game() {
    document.getElementById("maintext").innerHTML = "Fort Knight?";
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

        update_buttons("Attack", "Defend", "Escape", "---");


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
