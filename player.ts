import { rand } from "./randomGenerator";
import { Skill } from "./skill";

export class Player {
  private health: number;
  private defense: number;
  private attack: number;
  private skill: Skill;
  private name: string;
  private armour: number;

  constructor(name: string) {
    this.health = 100;
    this.name = name;
  }

  setArmour(armour: number) {
    this.armour = armour;
  }

  getArmour() {
    return this.armour;
  }

  setName(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setHealth(health: number) {
    this.health = health;
  }

  getHealth() {
    return this.health;
  }

  setDefense(defense: number) {
    this.defense = defense;
  }

  getDefense() {
    return this.defense;
  }

  setAttack(attack: number) {
    this.attack = attack;
  }

  getAttack() {
    return this.attack;
  }

  setSkill(skill: Skill) {
    this.skill = skill;
  }

  getSkill() {
    return this.skill;
  }

  engageAttack(defender: Player) {
    let activateSkillAttacker = rand(1, 4);
    let activateSkillDefender = rand(1, 4);
    let damagePower = 0;

    if (activateSkillAttacker === 1) {
      console.log(
        this.getName() + " activating ability : " + this.getSkill().getName()
      );
      this.getSkill().activate(this, defender, "ATTACKER");
    }

    if (activateSkillDefender === 1) {
      console.log(
        defender.getName() +
          " activating ability : " +
          defender.getSkill().getName()
      );
      defender.getSkill().activate(defender, this, "DEFENDER");
    }
    damagePower = this.getAttack() - defender.getDefense();

    if (damagePower > 0) {
      if (defender.getArmour() > 0) {
        defender.setArmour(defender.getArmour() - damagePower);
        if (defender.getArmour() < 0) {
          damagePower = -defender.getArmour();
        } else {
          damagePower = 0;
        }
      }
      defender.setHealth(defender.getHealth() - damagePower);
    }
  }
}
