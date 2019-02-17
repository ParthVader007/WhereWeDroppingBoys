function start_new_game()
{
  var hero = create_unit("Hero", 50, 10, 5);
  hero = first_part();
}


//document.getElementById("button1").onclick = function() {button1Click()};
function button1Click() {
  document.getElementById("button1").innerHTML = "YOU CLICKED ME!";
}


var scenarios = [];
var options = [[],[]];

scenarios[0] = "You have just woken up. You feel pain from the back of your head. As you sit up, you take a glance at your surroundings. You have almost no recollection of where you are or who you are.";
options[0][0] = "Get Up";
options[0][1] = "Go back to sleep";
options[0][2] = "";
options[0][3] = "";

scenarios[1] = "Just as you gather your thoughts, an orc bursts through the trees and lets out a furious war cry. You don't understand why the orc is angry or what he has against you, but instead of trying to figure that out you grab a nearby stick and prepare for combat.";
options[1][0] = "Prepare for combat";
options[1][1] = "Go back to sleep";
options[1][2] = "";
options[1][3] = "";

scenarios[1] = "You wake up even more confused and disoriented in an orc camp. Your arms and hands are bound together. “Hey” You turn your head to look at the source of the greeting and your eyes fall upon the image of a starved and malnourished man. As you focus your eyes, you realize you are in a tent of sorts. You also start to focus upon the smell of rotting flesh and human excrement. “So boy, you new here”? You start to open your mouth but then realize."
options[1][0] = "";
options[1][1] = "";
options[1][2] = "";
options[1][3] = "";


function first_part(hero)
{
  var text1 = "You have just woken up. You feel pain from the back of your head.";
  var text2 = "As you sit up, you take a glance at your surroundings. You have almost no recollection of where you are or who you are.";
  var text3 = "What would you like your name to be?"
  hero.name = getname();
}

function create_unit(name, health, attack, defense, mode)
{
	var unit = {};
  unit.name = name;
  unit.health = health;
  unit.attack = attack;
  unit.defense = defense;
  unit.mode = mode;

  unit.take_damage = function(enemy_attack) {
      var damage = enemy_attack - unit.defense;
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

  unit.set_info(name, health, attack, defense)
  {
    unit.name = name;
    unit.health = health;
    unit.attack = attack;
    unit.defense = defense;
  }


  return unit;
}



//Returns level of player. Stats range from 0-100. Level ranges from  1-5
function get_level(health, attack, defense)
{
	var avg = (health+attack+defense)/3;
  var level = avg / 25;
  return level + 1;
}



//combat
if (mode==1) {
	getElementById('button1').innerHTML= "Attack";
  getElementById('button2').innerHTML= "Defend";
  getElementById('button3').innerHTML= "Run";
  getElementById('button4').innerHTML= "Hide";
}
//start menu
else if (mode=0){
	getElementById('button1').innerHTML= "Start Game";
  getElementById('button2').innerHTML= "Quit";
  getElementById('button3').innerHTML= "Feels Bad";
  getElementById('button4').innerHTML= "-";
}
//discovery
else if (mode==2) {
  getElementById('button1').innerHTML= "Pick Up";
  getElementById('button2').innerHTML= "Move On";
  getElementById('button3').innerHTML= "-";
  getElementById('button4').innerHTML= "-";
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
