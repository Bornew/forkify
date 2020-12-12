import icons from 'url:../../img/icons.svg';
import View from './View';
class BookmarkView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it ;)';
  _message = '';
  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
  _generateMarkup() {
    console.log('bookmark', this._data);

    if(this._data.length === 0){
      return  `
        <div class="message">
          <div>
            <svg>
              <use href="${icons}#icon-smile"></use>
            </svg>
          </div>
          
          <p>
            No bookmarks yet. Find a nice recipe and bookmark it :)
          </p>
        </div>
      `
    }
    return this._data.map(recipe => `
       <li class="preview">
        <a class="preview__link" href="#${recipe.id}">
          <figure class="preview__fig">
            <img src=${recipe.image} alt="${recipe.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__name">
              ${recipe.title}
            </h4>
            <p class="preview__publisher">${recipe.publisher}</p>
          </div>
        </a>
      </li>              
    `).join();
  }
}

export default new BookmarkView();