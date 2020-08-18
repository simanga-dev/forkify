import Search from './models/search'
import * as searchView from './views/searchView'
import { elements, renderLoader, clearLoader } from './views/base'

/* Global state of the App
* - Seach object
* - Current recipe object
* - Liked recipe
* - Shopping list object
* - Liked recipe
*
* */

interface stateType {
  search?: Search
}


const state: stateType = {}

const controlSearch = async () => {
// 1 - Get query from view
const query = searchView.getInput()

  if (query) {
    // 2 - New Search object add to state
    state.search = new Search(query);


    // 3 - Prepare UI for results
    searchView.clearInput();
    searchView.cleareResults();
    renderLoader(elements.searchRes)

    // 4 - Search for recipe
    await state.search.getResults();

    // 5 - Render Results on th UI
    clearLoader();
    searchView.renderResults(state.search.rusults);
  }
}

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
})
