import * as model from './model.js';
import RecipeView from './views/recipeview.js';
import SearchView from './views/searchView.js';
import resultsView from './views/resultsView.js';

import paginationView from './views/paginationView.js';
import BookmarksView from './views/bookmarksView.js';
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

    resultsView.update(model.getSearchResultsPage());
    BookmarksView.update(model.state.bookmarks);
    await model.loadRecipe(id);
    RecipeView.render(model.state.recipe);
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
    resultsView.render(model.getSearchResultsPage());
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  resultsView.render(model.getSearchResultsPage(goToPage));
  paginationView.update(model.state.search);
};

const controlServings = function (newServings) {
  model.updateServings(newServings);
  RecipeView.render(model.state.recipe);
};
const controlAddBookmark = function () {
  //add/remmove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);
  //update recipe view
  RecipeView.update(model.state.recipe);

  //render bookmarks
  BookmarksView.render(model.state.bookmarks);
};
const init = function () {
  RecipeView.addHandlerRender(controlRecipes);
  RecipeView.addHandlerAddBookmark(controlAddBookmark);
  SearchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  RecipeView.addHandlerUpdateServings(controlServings);
};
init();
