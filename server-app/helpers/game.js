const { heroes } = require("../db/database");

class Game {
  constructor() {
    this.heroes = heroes;
  }

  randomizeHeroesTable() {
    const newArray = [...this.heroes];
    for (let i = newArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray.slice(0, 96);
  }

  randomValue() {
    return Math.floor(Math.random() * 96);
  }
}

exports.Game = Game;
