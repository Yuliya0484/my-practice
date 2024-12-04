import { getAllRecipes, getRecipeById } from './dummy';
import { openModal } from './modal';
import { renderRecipes } from './renderfunction';

export async function onDOMLoaded() {
  try {
    const { recipes } = await getAllRecipes();
    console.log(recipes);
    renderRecipes(recipes);
  } catch (error) {
    console.log('error', error);
  }
}
export async function onRecipeListClick(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  try {
    const id = event.target.dataset.id;
    const recipe = await getRecipeById(id);
    openModal();
  } catch (error) {
    console.log('error', error);
  }
}
