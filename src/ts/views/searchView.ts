 import { elements } from './base'

export const getInput = (): string => elements.searchInput.value

interface recipeInt {
  recipe_id: number
  image_url: string
  title: string
  publisher: string
}

export const clearInput = (): void => {
  elements.searchInput.value = ''
}

export const cleareResults = (): void => {
  elements.searchResList.innerHTML = ''
}

// Pasta with tomato and spinach
const limitRecipeTitle = (title: string, limit = 17) => {

    const newTitle: string[] = []

    if (title.length > limit) {

        title.split(' ').reduce((acc: number, cur: string) => {

            if (acc + cur.length <= limit) {

            newTitle.push(cur)

            }

            return acc + cur.length;
        }, 0)

        return `${newTitle.join(' ')}...`

    }
    return title;
}

const renderRecipe = (recipe: recipeInt): void => {

  const mockup = `
    <li>
      <a class="results__link results__link--active" href="${recipe.recipe_id}">
        <figure class="results__fig">
            <img src="${recipe.image_url}" alt="Test">
        </figure>
        <div class="results__data">
          <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
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


