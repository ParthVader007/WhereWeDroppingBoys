function Enemy(health, attack, defense) {
    this.hp = health;
    this.atk = attack;
    this.def = defense;
}

function take_damage(player_atk) {
    this.hp = this.hp - player_atk;
    if (this.hp < 0) {
        this.hp = 0;
    }
}
