import { TITLES, DESCRIPTIONS, POSTERS, GENRES } from './constants';
import { getRandomNumber } from './utils';

export const getFilmData = () => {
  return {
    title: TITLES[getRandomNumber(0, TITLES.length - 1)],
    description: new Array(getRandomNumber(1, 3))
      .fill(DESCRIPTIONS[getRandomNumber(0, DESCRIPTIONS.length - 1)])
      .join(`, `),
    rating: getRandomNumber(10, 100) / 10,
    poster: POSTERS[getRandomNumber(0, POSTERS.length - 1)],
    year: getRandomNumber(1928, 2019),
    duration: `${getRandomNumber(1, 3)}h&nbsp;${getRandomNumber(0, 59)}m`,
    comments: getRandomNumber(0, 20),
    genre: GENRES[getRandomNumber(0, GENRES.length - 1)],
  };
};
