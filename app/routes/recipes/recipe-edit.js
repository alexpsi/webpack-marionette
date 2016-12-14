import RecipeForm from 'recipe/form/index.js';

//BEGIN ROUTES
var routes = {
  'recipe/:id/edit': 'recipeEdit',
  'recipe/new': 'recipeNew'
}
//END ROUTES

export default (layout) => Backbone.Router.extend({
  routes,
  recipeEdit(params) {
    layout.showChildView('region1', new RecipeForm({id: params}))
  },
  recipeNew(params) {
    layout.showChildView('region1', new RecipeForm({id: params}))
  },
})
