const API_URL = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/DEMO/recipes';

const recipes = []

const recipesList = document.querySelector('#recipes');

const addRecipeForm = document.querySelector('#addRecipe');
addRecipeForm.addEventListener('submit', addRecipe);

/**
 * Sync state with the API and rerender
 */
async function render() {
  // TODO
}
render();

/**
 * Update state with recipes from API
 */
async function getRecipes() {
  // TODO
}

/**
 * Ask API to create a new recipe and rerender
 * @param {Event} event
 */
async function createRecipe(event) {
    // TODO
}

/**
 * Ask API to update an existing recipe and rerender
 * NOTE: This is not currently used in the app, but it's here for reference.
 * @param {number} id id of the recipe to update
 * @param {string} name new name of recipe
 * @param {string} imageUrl new url of recipe image
 * @param {string} description new description for recipe
 */
async function updateRecipe(id, name, imageUrl, description) {
  // STRETCH GOAL - add the HTML to provide the user a form where they can edit an existing recipe AND send a PUT request to the API to make those updates
}

/**
 * Ask API to delete a recipe and rerender
 * @param {number} id id of recipe to delete
 */
async function deleteRecipe(id) {
  // TODO
}

/**
 * Render recipes from state
 */
function renderRecipes() {
  // TODO
}