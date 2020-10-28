exports.randomizeHeroesTable = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray.slice(0, 96);
};

exports.randomValue = () => {
  return Math.floor(Math.random() * 96);
};
