export const classList = [
  'Bowman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
];

export default class Character {
  constructor(name, type) {
    if (name.length > 2 && name.length < 10) {
      this.name = name;
    } else {
      throw new Error('Имя короче двух символов или длиннее десяти!');
    }
    if (classList.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Такого класса не существует!');
    }
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;
  }
}
