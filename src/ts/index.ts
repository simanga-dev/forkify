import Search from "./modules/search";

/*
Global State for our app
1. Search object
2. cuurent recipe object
3. shooping list object
4. Liked recipes
*/

const state = {
  search: 

};
const search = new Search("pizza");

const controlSearch = () => {
  //get query from view
  // if query, new seach object
  const query = "pizza  ";
const test = new Search(query)
test()
  if (query) {
    state.search = new Search(query);
  }
};

document.querySelector(".search")?.addEventListener("submit", (e) => {
  e.preventDefault();
});

console.log(search.getResults());
