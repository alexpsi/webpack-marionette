import BlockAlpha from 'block-alpha';

//BEGIN ROUTES
var routes = {
  'testview1': 'testview1'
}
//END ROUTES

export default (layout) => Backbone.Router.extend({
  routes,
  initialize(options) {
  },
  testview1(params) {
    layout.showChildView('region1', new BlockAlpha())
  },
})
