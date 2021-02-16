import { Player } from "./player";
import { rand } from "./randomGenerator";
import { Game } from "./game";
import { Skill } from "./skill";
import { load_Skills } from "./load_skills";

let player1 = new Player("Character1");
player1.setDefense(rand(10, 15));
player1.setAttack(rand(15, 20));
player1.setArmour(rand(10, 20));

let player2 = new Player("Character2");
player2.setDefense(rand(10, 15));
player2.setAttack(rand(15, 20));
player2.setArmour(rand(10, 20));

let skills: Skill[] = [];

load_Skills(skills);

let game: Game = new Game(player1, player2);
game.start(skills);
