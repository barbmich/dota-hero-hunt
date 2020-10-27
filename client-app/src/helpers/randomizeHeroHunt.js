// export function randomizeHeroHunt(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

export class RandomizeHeroHunt {
  constructor(min, max) {
    this.min = min;
    this.max = max;
  }
  randomize() {
    return Math.floor(Math.random() * (this.max - this.min)) + this.min;
  }
}
