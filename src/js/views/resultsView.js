import icons from 'url:../../img/icons.svg';
import { Fraction } from 'fractional';
import View from './View.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query. Please try again!';
  _message = '';

  _generateMarkup() {
    console.log('results', this._data);
    return this._data.map(recipeResult=>(`
      <li class="preview">
        <a class="preview__link preview__link--active" href="#${recipeResult.id}">
          <figure class="preview__fig">
            <img src="${recipeResult.image}" alt="${recipeResult.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${recipeResult.title}</h4>
            <p class="preview__publisher">${recipeResult.publisher}</p>
            <div class="preview__user-generated">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `)).join();
  }
}

export default new ResultsView();
