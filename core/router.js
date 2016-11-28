import appFinder from './app_finder.js';

export default (layout) => Backbone.Router.extend({
  routes: {
    '*handleMissingRoute': 'handle404',
  },
  handle404(path) {
    const miniApp = appFinder(path);
    if (miniApp) {
      const handler = require('bundle!./../app/routes/' + miniApp + '/index.js');
      handler(bundle => {
        new (bundle.default(layout));
        Backbone.history.loadUrl(); // just refreshing the current path, because we've added new paths that we can handle
      });
    } else {
      console.log('404');
    }
  }
});
