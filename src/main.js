import renderFilter from './templates/renderFilter';
import renderFilmCard from './templates/renderFilmCard';
import { FILTERS } from './constants';
import { getRandomNumber } from './utils';
import { getFilmData } from './data';

const filtersBlock = document.querySelector(`.main-navigation`);
const filmsBlock = document.querySelector(`.films-list .films-list__container`);

for (let filter of FILTERS.reverse()) {
  filtersBlock.insertAdjacentHTML(
    'afterbegin',
    renderFilter(filter, false, getRandomNumber(1, 10)),
  );
  const filters = document.querySelectorAll(`.main-navigation__item`);
  for (let filter of Array.from(filters)) {
    filter.addEventListener('click', () => {
      renderAllCards(getRandomNumber(1, 10));
    });
  }
}

const renderAllCards = number => {
  filmsBlock.innerHTML = '';
  for (let i of new Array(number)) {
    filmsBlock.insertAdjacentHTML('afterbegin', renderFilmCard(getFilmData()));
  }
};

renderAllCards(7);
