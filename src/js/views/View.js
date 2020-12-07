import { Fraction } from 'fractional';
import icons from 'url:../../img/icons.svg';

export default class View {
  _data;
  _errorMessage = 'No recipes found for your query. Please try again!';
  _message = '';
  render(data) {
    if(!data || (Array.isArray(data) && data.length === 0)) return this.renderError();
    this._data = data;
    this._clear();
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    const markup = `
       <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div> 
   `;
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  renderError(err = this._errorMessage) {
    const markup = `
        <div class="error">
          <div>
            <svg>
              <use href="${icons}#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${err}</p>
        </div> 
     `;
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage(message = this._message) {
    const markup = `
        <div class="message">
          <div>
            <svg>
              <use href="${icons}#icon-smile"></use>
            </svg>
          </div>
          <p>${message}</p>
        </div> 
     `;
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
