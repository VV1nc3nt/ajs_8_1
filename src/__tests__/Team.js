import Character from '../Character';
import Team from '../Team';

test('Testing Team class function Add()', () => {
  const dreamTeam = new Team();
  const legolas = new Character('Legolas', 'Bowman');
  dreamTeam.add(legolas);
  const recieved = dreamTeam.members;
  const expected = new Set([{
    name: 'Legolas',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 0,
    defence: 0,
  }]);
  expect(expected).toEqual(recieved);
});

test('Testing Team class function Add() with another character', () => {
  const dreamTeam = new Team();
  const legolas = new Character('Legolas', 'Bowman');
  const ranger = new Character('Drow', 'Bowman');
  dreamTeam.add(legolas);
  dreamTeam.add(ranger);
  const recieved = dreamTeam.members;
  const expected = new Set([{
    name: 'Legolas',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 0,
    defence: 0,
  },
  {
    name: 'Legolas',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 0,
    defence: 0,
  }]);
  expect(expected).toEqual(recieved);
});

test('Testing Team class function Add() with Error', () => {
  expect(() => {
    const dreamTeam = new Team();
    const legolas = new Character('Legolas', 'Bowman');
    const legolas1 = new Character('Legolas', 'Bowman');
    dreamTeam.add(legolas);
    dreamTeam.add(legolas1);
  }).toThrow(new Error('Вы уже добавили этого персонажа в команду'));
});

test('Testing Team class function AddAll()', () => {
  const dreamTeam = new Team();
  const legolas = new Character('Legolas', 'Bowman');
  const artur = new Character('Artur', 'Swordsman');
  dreamTeam.addAll(legolas, artur);
  const recieved = dreamTeam.members;
  const expected = new Set([{
    name: 'Legolas',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 0,
    defence: 0,
  },
  {
    name: 'Artur',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 0,
    defence: 0,
  }]);
  expect(expected).toEqual(recieved);
});

test('Testing Team class function AddAll() with Error', () => {
  expect(() => {
    const dreamTeam = new Team();
    const legolas = new Character('Legolas', 'Bowman');
    const legolas1 = new Character('Legolas', 'Bowman');
    dreamTeam.addAll(legolas, legolas1);
  }).toThrow(new Error('Вы уже добавили этого персонажа в команду'));
});

test('Testing Team class function toArray()', () => {
  const dreamTeam = new Team();
  const legolas = new Character('Legolas', 'Bowman');
  const artur = new Character('Artur', 'Swordsman');
  dreamTeam.addAll(legolas, artur);
  const recieved = dreamTeam.toArray();
  const expected = [{
    name: 'Legolas',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 0,
    defence: 0,
  },
  {
    name: 'Artur',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 0,
    defence: 0,
  }];
  expect(expected).toEqual(recieved);
});
