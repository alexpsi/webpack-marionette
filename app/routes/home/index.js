import RecipeList from 'recipe/list/index.js';

//BEGIN ROUTES
var routes = {
  '': 'home'
}
//END ROUTES

export default (layout) => Backbone.Router.extend({
  routes,
  initialize(options) {
  },
  home(params) {
    layout.showChildView('region1', new RecipeList());
  },
})
