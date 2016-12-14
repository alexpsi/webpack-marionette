import RecipeList from 'recipe/list/index.js';

//BEGIN ROUTES
var routes = {
  '': 'recipes'
}
//END ROUTES

export default (layout) => Backbone.Router.extend({
  routes,
  initialize(options) {
  },
  recipes(params) {
    layout.showChildView('region1', new RecipeList());
  },
})
