import { onDOMLoaded, onRecipeListClick } from './js/handlers';
import { refs } from './js/refs';

document.addEventListener('DOMContentLoaded', onDOMLoaded);
refs.recipesList.addEventListener('click', onRecipeListClick);
