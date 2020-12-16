import View from './View.js';
import icons from 'url:../../img/icons.svg';

class sortSearchResultsView extends View {
  _parentElement = document.querySelector('.sort');

  addHandlerSort(handler) {
    this._parentElement.addEventListener('click', function(e) {
      // 触发了排序按钮 就重新排序
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      console.log(btn);
      handler();
    });
  }

  _generateMarkup() {
    return `
      <button class="btn--inline sort__btn">
        <span>Sort</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>
    `;
  }
}

export default new sortSearchResultsView();
