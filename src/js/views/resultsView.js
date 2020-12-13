import icons from 'url:../../img/icons.svg';
import { Fraction } from 'fractional';
import View from './View.js';
import PreviewView from './previewView.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query. Please try again!';
  _message = '';

  _generateMarkup() {
    console.log('results', this._data);
    return this._data.map(recipeResult=>PreviewView.render(recipeResult, false)).join('');
  }

}

export default new ResultsView();
