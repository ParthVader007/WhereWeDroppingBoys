function Player(name, health, attack, defense) {
    this.name = name;
    this.hp = health;
    this.atk = attack;
    this.def = defense;
}

function take_damage(enemy_attack) {
    var damage = enemy_attack;
    if (damage < 0)
    {
      damage = 0;
    }
    this.hp = this.hp - damage;
}

function take_reduced_damage(enemy_attack) {
    var damage = enemy_attack - this.def;
    if (damage < 0)
    {
      damage = 0;
    }
    this.hp = this.hp - damage;
}

function set_info(name, health, attack, defense) {
    this.name = name;
    this.hp = health;
    this.atk = attack;
    this.def = defense;
}
