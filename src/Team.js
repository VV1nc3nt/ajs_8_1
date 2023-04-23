export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    this.members.forEach((member) => {
      if (character.name === member.name && character.type === member.type) {
        throw new Error('Вы уже добавили этого персонажа в команду');
      }
    });
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((character) => {
      this.members.forEach((member) => {
        if (character.name === member.name && character.type === member.type) {
          throw new Error('Вы уже добавили этого персонажа в команду');
        }
      });
      this.members.add(character);
    });
  }

  toArray() {
    const membersArray = [];
    this.members.forEach((member) => membersArray.push(member));
    return membersArray;
  }
}
