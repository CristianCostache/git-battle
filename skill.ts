import { Player } from "./player";

export class Skill {
  private name: string;
  private attack: number;
  private health: number;
  private damage: number;
  private hit: number;

  constructor(name: string) {
    this.name = name;
  }

  setHit(hit: number) {
    this.hit = hit;
  }

  getHit() {
    return this.hit;
  }

  setDamage(damage: number) {
    this.damage = damage;
  }

  getDamage() {
    return this.damage;
  }

  setAttack(attack: number) {
    this.attack = attack;
  }

  getAttack() {
    return this.attack;
  }

  setHealth(health: number) {
    this.health = health;
  }

  getHeath() {
    return this.health;
  }

  setName(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  activate(player1: Player, player2: Player, status: string) {
    player1.setAttack(this.attack * player1.getAttack());
    player2.setAttack(this.damage * player2.getAttack());
    if (status === "ATTACKER") {
      player2.setHealth(player2.getHealth() * this.hit);
    }

    if (player1.getHealth() < 30) {
      player1.setHealth(this.health + player1.getHealth());
    }
  }
}
