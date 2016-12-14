import RecipeDetail from 'recipe/detail/index.js';

//BEGIN ROUTES
var routes = {
  'recipe/:id': 'recipe'
}
//END ROUTES

export default (layout) => Backbone.Router.extend({
  routes,
  initialize(options) {},
  recipe(params) {
    layout.showChildView('region1', new RecipeDetail({id: params}))
  },
})
