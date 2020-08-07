 import { elements } from './base'

export const getInput = (): string => elements.searchInput.value

interface recipeInt {
  recipe_id: number
  image_url: string
  title: string
  publisher: string
}
const renderRecipe = (recipe: recipeInt): void => {

  const mockup = `
    <li>
      <a class="results__link results__link--active" href="${recipe.recipe_id}">
        <figure class="results__fig">
            <img src="${recipe.image_url}" alt="Test">
        </figure>
        <div class="results__data">
          <h4 class="results__name">${recipe.title}</h4>
            <p class="results__author">${recipe.publisher}}</p>
          </div>
      </a>
    </li>
  `
  elements.searchResList.insertAdjacentHTML('beforeend', mockup);

}

export const renderResults = (recipes: []): void => {
  recipes.forEach(renderRecipe)
}


