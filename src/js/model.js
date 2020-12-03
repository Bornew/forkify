import { async } from 'regenerator-runtime';
import {Fraction} from 'fractional';
import {API_KEY} from './config';
import {getJSON} from './views/helpers';
import {API_URL} from './config';
export const state = {
  recipe: {}
};

export const loadRecipe = async function(id) {
  try {
    const data = await getJSON(`${API_URL}/${id}`);
    // 1) Get the recipe data
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      image: recipe.image_url,
      servings: recipe.servings,
      sourceUrl: recipe.source_url,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients
    };
    console.log(state.recipe);
  } catch (err) {
    console.log(err);
  }
};
