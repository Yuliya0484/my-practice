import { getAllRecipes } from './dummy';
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
