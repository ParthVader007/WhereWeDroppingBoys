function Player(name, health, attack, defense) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
}

function take_damage(enemy_attack) {
    var damage = enemy_attack;
    if (damage < 0)
    {
      damage = 0;
    }
    this.health = this.health - damage;
}

function take_reduced_damage(enemy_attack) {
    var damage = enemy_attack - this.defense;
    if (damage < 0)
    {
      damage = 0;
    }
    this.health = this.health - damage;
}

function set_info(name, health, attack, defense) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
}
