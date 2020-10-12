export function randomizeHeroHunt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
