import { Skill } from "./skill";

export function load_Skills(skills: Skill[]) {
  let attack_increase = new Skill("ATTACK_INCREASE");

  attack_increase.setDamage(1);
  attack_increase.setAttack(1.5);
  attack_increase.setHealth(0);
  attack_increase.setHit(1);

  skills.push(attack_increase);

  let damage_splitter = new Skill("DAMAGE_SPLITTER");

  damage_splitter.setDamage(0.5);
  damage_splitter.setAttack(1);
  damage_splitter.setHealth(0);
  damage_splitter.setHit(1);

  skills.push(damage_splitter);

  let health_upgrade = new Skill("HEALTH_UPGRADE");

  health_upgrade.setDamage(1);
  health_upgrade.setAttack(1);
  health_upgrade.setHealth(5);
  health_upgrade.setHit(1);

  skills.push(health_upgrade);

  let freeze_attack = new Skill("FREEZE_ATTACK");

  freeze_attack.setDamage(0);
  freeze_attack.setAttack(1);
  freeze_attack.setHealth(0);
  freeze_attack.setHit(1);

  skills.push(freeze_attack);

  let demolish = new Skill("DEMOLISH");

  demolish.setDamage(1);
  demolish.setAttack(1);
  demolish.setHealth(0);
  demolish.setHit(0.5);

  skills.push(demolish);

  let doubleAttack = new Skill("DOUBLE_ATTACK");

  doubleAttack.setDamage(1);
  doubleAttack.setAttack(2);
  doubleAttack.setHealth(0);
  doubleAttack.setHit(1);

  skills.push(doubleAttack);
}
