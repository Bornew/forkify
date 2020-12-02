const recipeContainer = document.querySelector('.recipe');

const timeout = function(s) {
  return new Promise(function(_, reject) {
    setTimeout(function() {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

const showRecipe = async function() {
  try {
    const res = await fetch(
      'https://forkify-api.herokuapp.com/v2/908b9d8b-7b5d-4b26-b7c5-b06830d461fc'
    );
  } catch (err) {
    alert(err);
  }
};
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
