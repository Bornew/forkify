import 'core-js/stable';
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import bookmarkView from './views/bookmarksView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';

// https://forkify-api.herokuapp.com/v2
const controlRecipes = async function() {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);
    if (!id) return;
    recipeView.renderSpinner();
    resultsView.updateView(model.getSearchResultsPage());
    bookmarksView.updateView(model.state.bookmarks);
    await model.loadRecipe(id);
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.log(err);
    recipeView.renderError();
  }
};

const controlSearchResults = async function() {
  try {
    resultsView.renderSpinner();
    const query = searchView.getQuery();
    if (!query) return;
    await model.loadSearchResults(query);
    // console.log(model.state.search.results);
    resultsView.render(model.getSearchResultsPage(model.state.search.page));
    console.log(model.getSearchResultsPage());
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function(gotoPage) {
  // 1) Render new pagination
  resultsView.render(model.getSearchResultsPage(gotoPage));
  // 2) Render new pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function(newServings) {
  //Update the servings in the state - recipe - servings
  model.updateServings(newServings);
  // recipeView.render(model.state.recipe);
  //Update the servings in the recipeView
  recipeView.updateView(model.state.recipe);
};

const controlAddBookmark = function() {
  if (!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe);
    console.log(model.state.recipe); //
  } else {
    model.deleteBookmark(model.state.recipe.id);
  }
  recipeView.updateView(model.state.recipe);
  bookmarkView.render(model.state.bookmarks);
};

const controlBookmarks = function() {
  console.log('controlBookmarks', model.state.bookmarks);
  bookmarkView.render(model.state.bookmarks);
};
const init = function() {
  bookmarkView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};

init();
