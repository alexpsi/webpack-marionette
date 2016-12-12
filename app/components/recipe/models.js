let RecipeModel = Bb.Model.extend({
  defaults: {
    prep: '-',
    cook: '-',
    portions: '-',
  }
});

let RecipesCollection = Bb.PageableCollection.extend({
  url: 'http://localhost:3000/recipes',
  model: RecipeModel,
  mode: 'infinite',
  state: {
    pageSize: 2
  },
  queryParams: {
    currentPage: '_page',
    pageSize: '_limit'
  }
});

export default {
  RecipeModel,
  RecipesCollection,
}
