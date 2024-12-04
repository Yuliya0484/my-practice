import { refs } from './refs';

export function renderRecipes(recipes) {
  const markup = recipes
    .map(
      ({ image, name, difficulty, cuisine }) =>
        `<li class="recipes-item">
            <img class="image" src="${image}" alt="${name}" />
            <div class="box">
              <h3 class="title">${name}</h3>
              <p class="text">Cuisine: ${cuisine}</p>
              <p class="text">Difficulty: ${difficulty}</p>
            </div>
          </li>`
    )
    .join('');
  refs.recipesList.innerHTML = markup;
}
