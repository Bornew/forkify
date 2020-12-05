import { API_KEY } from './config';
import { getJSON } from './views/helpers';
import { API_URL } from './config';
export const state = {
  recipe: {},
  search: {
    query: '',
    results: []
  }
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
    throw err;
  }
};

export const loadSearchResults = async function(query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}`);
    console.log(query);
    console.log(data);
    state.search.results = data.data.recipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url
      };
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};
