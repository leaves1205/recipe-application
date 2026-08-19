import * as model from './model.js';
import RecipeView from './views/recipeview.js';
import SearchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import renderSpinner from './views/view.js';

import 'core-js/stable'; // polyfilling everything else
import 'regenerator-runtime/runtime'; // polyfilling async/await
import { async } from 'regenerator-runtime';

if (module.hot) {
  module.hot.accept();
}
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    RecipeView.renderSpinner();

    await model.loadRecipe(id);
    RecipeView.render(model.state.recipe);
    //rendering recipe
  } catch (err) {
    RecipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    const query = SearchView.getQuery();
    if (!query) return;

    await model.loadSearchResults(query);
    console.log(model.state.search.results);
    resultsView.render(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};
const init = function () {
  RecipeView.addHandlerRender(controlRecipes);
  SearchView.addHandlerSearch(controlSearchResults);
};
init();
