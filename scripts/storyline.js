//Title screen: You and your friends are bad at fortnite, but still want to enjoy the game because that's what the kids to these days.

scenario = [];
options = [[]];
next = [[]];

scenario[0] = "You and your two friends squad up and get into a lobby together, but a rando joins your squad. You and your friends don�t really like playing with strangers so you have decisions to make here.";
options[0][1] = "Do you completely ignore your teammate?";
options[0][2] = "Do you set a fake marker on the map to get them as far away from you as possible?";
options[0][3] = "Do you quit and start a new game without a stranger";
next[0][1] = 1;
next[0][2] = 2;
next[0][3] = 5;

scenario[1]: "Your teammate is on the voice channel and is telling every what to do in a very squeaky, twelve year old voice. It�s going to be hard to ignore them. After finding out that they are being ignored, they start throwing out roasts.";
options[1][0] = "Do you speak up and put the kid in his place?";
options[1][1] = "Do you resist the urge and continue to ignore him?";
next[1][0] = 3;
next[1][1] = 4;

scenario[2] = "After successfully deceiving your teammate, you realize that they are running back towards you. You have landed in the middle of a battle and need to try your best not to get sniped by a try hard. What is more important here, not getting killed, or getting away from this guy?";
options[2][0] = "Try not to get killed";
options[2][1] = "You really don't want to put up with the kid, and start running away from him.";
next[2][0] = 4;
next[2][1] = 3;

scenario[3] = "By now, you don't even care about the game and fully committed to messing with your random teammate. We are just having fun.";
options[3][0] = "Do you try to trigger the kid to the point where he just leaves by himself?";
options[3][1] = "Do you troll him and try to use him as a shield?";
next[3][0] = 6;
next[3][1] = 6;

scenario[4] = "There are people shooting at your team from all directions and you can't seem to figure out where it�s coming from. None of you are good in these types of situations so you end up building a fort and sitting inside. The walls are about to be shot down, so you have to think fast.";
options[4][0] = "Do you plan an escape route?";
options[4][1] = "Do you hope that the people shooting at you just give up and leave you alone?";
next[4][0] = 8;
next[4][1] = 9;

scenario[5] = "Now that you and your two friends are on a team of 3, free of any distractions, you are feeling pretty confident and make the bold decision to go to tilted towers. Your friends aren�t as confident and don�t agree with you.";
options[5][0] = "You listen to your friends and go to the island in the center of the lake?";
options[5][1] = "You make the final executive call and go to tilted towers.";
next[5][0] = 7;
next[5][1] = 9;

scenario[6] = "Turns out that you trolled the kid enough to where he just wanted to quit. He stepped in front of a shotgun blast and took one for the team. His sacrifice will always be remembered. Looting your dead teammate, you find some nice items.";
options[6][0] = "Do you take the best gun in the game, the SCAR?";
options[6][1] = "Or do you take the portable fort for emergency situations?";
next[6][0] = 5;
next[6][1] = 4;

scenario[7] = "The island looks like it�s the best place on the map to go to because you get a lot of good loot there. Unfortunately, everyone else also knows this and you encounter several other teams.";
options[7][0] = "Do you try running away even though you are on a island?";
options[7][1] = "Do you stand your ground and fight to the death.";
next[7][0] = 9;
next[7][1] = 9;

scenario[8] = "The escape plan went successfully and you are not making your way to an island at the center of the map. Along the way, you see a mysterious house with some glowing inside. This could mean that you have found something amazing. But there also could be someone hiding inside.";
options[8][0] = "Do you take your chances and enter the house?";
options[8][1] = "Do you continue on your journey to the island?";
next[8][0] = 9;
next[8][1] = 7;

scenario[9] = "Looks like that was a bad decision, and you just got M U R K E D. They didn't just shoot you from afar and end your game. The people who killed you went out of their way to make it as painful as possible without using a gun. They carefully baited you into a cube and trapped you inside of it. They then placed a spike trap and impaled you to your death.";
