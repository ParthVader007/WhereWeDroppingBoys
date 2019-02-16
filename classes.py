import random

ATTACK = "attack"
DEFENSE = "defense"
HP = "health"



unit_dict = {HP: 0, ATTACK: 0, DEFENSE: 0}

class Unit(object):
	'''
	Basic Unit Object
	'''

	def __init__(self, unit_name, unit_stats_dict):
	self.unit_stats = unit_dict
	self.unit_name = unit_name


	def take_damage(enemy_attack):
	'''
	Reduces a units hp dependent on the enemy's attack
	'''

	damage = enemy_attack - unit_dict[DEFENSE];
	if damage < 0:
		damage = 0
	unit_stats[HP] -= damage
	return None

	





