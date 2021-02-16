import { Player } from "./player";
import { rand } from "./randomGenerator";
import { Skill } from "./skill";

export class Game {
  private player1: Player;
  private player2: Player;

  constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
  }

  start(skills: Skill[]) {
    let attacker = rand(1, 2);
    let round = 1;
    let player1_attack = this.player1.getAttack();
    let player2_attack = this.player2.getAttack();

    console.log("Character 1 attack: " + this.player1.getAttack());
    console.log("Character 1 defense: " + this.player1.getDefense());

    console.log("Character 2 attack: " + this.player2.getAttack());
    console.log("Character 2 defense: " + this.player2.getDefense());

    while (this.player1.getHealth() > 0 && this.player2.getHealth() > 0) {
      console.log("Round " + round);

      this.player1.setAttack(player1_attack);
      this.player2.setAttack(player2_attack);

      if (this.player1.getArmour() > 0) {
        console.log("Character 1 armour : " + this.player1.getArmour());
      }

      if (this.player2.getArmour() > 0) {
        console.log("Character 2 armour : " + this.player2.getArmour());
      }

      this.player1.setSkill(skills[rand(0, skills.length - 1)]);
      this.player2.setSkill(skills[rand(0, skills.length - 1)]);

      console.log("Character 1 skill: " + this.player1.getSkill().getName());
      console.log("Character 2 skill: " + this.player2.getSkill().getName());

      if (attacker % 2 === 1) {
        console.log("Character 1 attacking");
        this.player1.engageAttack(this.player2);
      } else {
        console.log("Character2 attacking");
        this.player2.engageAttack(this.player1);
      }

      console.log("Character 1 health:" + this.player1.getHealth());
      console.log("Character 2 health:" + this.player2.getHealth());

      round++;
      attacker++;
    }

    this.displayWinner();
  }

  displayWinner() {
    if (this.player1.getHealth() <= 0) {
      console.log("Character 2 wins!");
    } else {
      console.log("Character 1 wins!");
    }
  }
}
