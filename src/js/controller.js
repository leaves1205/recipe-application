import * as model from './model.js';
import RecipeView from './views/recipeview.js';
import 'core-js/stable'; // polyfilling everything else
import 'regenerator-runtime/runtime'; // polyfilling async/await

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////
console.log('test');

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    RecipeView.renderSpinner(recipeContainer);

    await model.loadRecipe(id);
    RecipeView.render(model.state.recipe);
    //rendering recipe
  } catch (err) {
    RecipeView.renderError();
  }
};
const init = function () {
  RecipeView.addHandlerRender(controlRecipes);
};
init();
