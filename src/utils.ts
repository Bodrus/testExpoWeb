import { Theme } from "./types/theme";

export const getRandomIndex = (array: Theme[], excludedIndex: number) => {
  if (!Array.isArray(array)) {
    throw new Error("The input is not an array");
  }
  if (excludedIndex < 0 || excludedIndex >= array.length) {
    throw new Error("The excluded index is out of bounds");
  }

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * array.length);
  } while (randomIndex === excludedIndex);

  return randomIndex;
};

export const getRandomColor = (): Theme => {
  const letters = "0123456789ABCDEF";
  const getColor = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return {
    backgroundColor: getColor(),
    textColor: getColor(),
  };
};
