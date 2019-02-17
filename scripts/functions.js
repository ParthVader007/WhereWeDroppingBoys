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
var attack_boost;

var kill_count = 0;
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

function update_battle_info() {
        document.getElementById("orc_hp").innerHTML = "Enemy Hp: " + enemy.hp;
        document.getElementById("orc_atk").innerHTML = "Enemy Atk: " + enemy.atk;
        document.getElementById("player_hp").innerHTML = "Your HP: " + hero.hp;
        document.getElementById("player_atk").innerHTML = "Your Atk: " + hero.atk;
        document.getElementById("directions").innerHTML = "What will you do?";

        document.getElementById("option1").innerHTML = "Attack";
        document.getElementById("option2").innerHTML = "Defend";
        document.getElementById("option3").innerHTML = "Power Up";
        document.getElementById("option4").innerHTML = "---";
}

function new_game_reset() {
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
}


function next_enemy() {
    document.getElementById("maintext").innerHTML = "You killed the orc, but another appears!";
    kill_count++;
    document.getElementById("option1").innerHTML = "Next Enemy";
    document.getElementById("option2").innerHTML = "---";
    document.getElementById("option3").innerHTML = "---";
    document.getElementById("option4").innerHTML = "---";

    //resets the screen
    document.getElementById("orc_hp").innerHTML = "";
    document.getElementById("orc_atk").innerHTML = "";
    document.getElementById("player_hp").innerHTML = "";
    document.getElementById("player_atk").innerHTML = "";
    document.getElementById("directions").innerHTML = "";
    mode = TRANSITION;
    enemy_hp = getRandomArbitrary(60, 120);
    enemy_atk = getRandomArbitrary(5, 10)
    enemy = new Enemy(enemy_hp, enemy_atk, 0);
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
        enemy_atk = getRandomArbitrary(5, 10)
        enemy = new Enemy(enemy_hp, enemy_atk, 0);
        mode = STORY;

        document.getElementById("maintext").innerHTML = "Good luck and may fortune be in your favor!";
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
        update_battle_info();
        mode = ATTACK;

    } else if (mode == ATTACK) {
        document.getElementById("maintext").innerHTML = "";
        update_battle_info();


        document.getElementById("maintext").innerHTML = "You did " + hero.atk + " damage to the orc! You took " + enemy.atk + " damage!";
        hero.hp -= enemy.atk;
        document.getElementById("player_hp").innerHTML = "Your HP: " + hero.hp;
        enemy.hp -= hero.atk;
        document.getElementById("orc_hp").innerHTML = "Enemy HP: " + enemy.hp;


        //game lose function
        if (hero.hp <= 0) {
            document.getElementById("maintext").innerHTML = "You Died Valiantly! In the end, you killed " + kill_count + " orcs";
            new_game_reset();
            mode = START;
        }
        else if (enemy.hp <= 0) {
            next_enemy()
        }

    } else if (mode == GAMEOVER) {
        document.getElementById("maintext").innerHTML = "Welcome to the Glade!";
        document.getElementById("option1").innerHTML = "Continue";
        mode = STARTGAME;
    }
}

function button2() {
    if (mode == ATTACK) {
        document.getElementById("maintext").innerHTML = "";
        update_battle_info();

        document.getElementById("maintext").innerHTML = "You protect yourself and take reduced damage!, you took " + enemy_atk*.1 + " damage!";
        hero.hp -= Math.ceil(enemy.atk*.1);
        document.getElementById("player_hp").innerHTML = "Your HP: " + hero.hp;
        document.getElementById("orc_hp").innerHTML = "Enemy HP: " + enemy.hp;


        //game lose function
        if (hero.hp <= 0) {
            document.getElementById("maintext").innerHTML = "You Died Valiantly! In the end, you killed " + kill_count + " orcs";
            new_game_reset();

            mode = START;
        }
        else if (enemy.hp <= 0) {
            next_enemy();
        }

    }
}


function button3() {
    if (mode == ATTACK) {
        document.getElementById("maintext").innerHTML = "";
        update_battle_info();

        attack_boost = getRandomArbitrary(5, 10);
        document.getElementById("maintext").innerHTML = "You Power Up! You increased your attack by " + attack_boost + "! However, you took " + enemy.atk + " damage while powering up!";
        hero.atk += attack_boost;
        hero.hp -= enemy.atk;
        document.getElementById("player_hp").innerHTML = "Your HP: " + hero.hp;
        document.getElementById("orc_hp").innerHTML = "Enemy HP: " + enemy.hp;
        document.getElementById("player_atk").innerHTML = "Your Atk: " + hero.atk;


        //game lose function
        if (hero.hp <= 0) {
            document.getElementById("maintext").innerHTML = "You Died Valiantly! In the end, you killed " + kill_count + " orcs";
            new_game_reset();

            mode = START;
        }
        else if (enemy.hp <= 0) {
            next_enemy();

        }

    }
}
