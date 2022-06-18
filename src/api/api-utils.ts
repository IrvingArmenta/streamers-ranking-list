import { StreamerArrayType } from './types';

// function to fake fetching time or any other async operation
export const sleep = (duration: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });

// function to get a random number between two defined values
export function genRandomNumb(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// function to randomly update the streamer array,
// specifically the score of randomly number of streamers
export function randomUpdateStreamerArray(array: StreamerArrayType) {
  // immutability
  const newArr = [...array];

  for (let i = 0; i < genRandomNumb(1, 4); i++) {
    const randomN = genRandomNumb(0, newArr.length - 1);

    const randomModelById = newArr.find((model) => {
      return model.userID === newArr[randomN].userID;
    });

    if (randomModelById) {
      randomModelById.score = randomModelById.score + genRandomNumb(10, 88888);
    }
  }

  return newArr.sort((a, b) => b.score - a.score);
}
