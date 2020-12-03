import 'core-js/stable';
const recipeContainer = document.querySelector('.recipe');
import * as model from './model.js';
import recipeView from './views/recipeView.js'



// https://forkify-api.herokuapp.com/v2
const controlRecipes = async function() {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);
    if(!id) return;
    recipeView.renderSpinner();
    await model.loadRecipe(id);
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};

// showRecipe(recipeContainer);
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipes));