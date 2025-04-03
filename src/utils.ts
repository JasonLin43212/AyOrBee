export const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
};

export const getNRandomInts = (max: number, count: number): number[] => {
  const output: number[] = [];
  while (output.length < count) {
    const newNum: number = getRandomInt(max);
    if (!output.includes(newNum)) {
      output.push(newNum);
    }
  }

  return output;
};

export const pickRandomItemFromArray = <T>(arr: T[]): T => {
  return arr[getRandomInt(arr.length)];
}

export const pickRandomUniqueItemsFromArray = <T>(arr: T[], numItems: number): T[] => {
  return getNRandomInts(arr.length, numItems).map((index: number): T => arr[index]);
}

export const shuffleArray = (array: any[]): void => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
