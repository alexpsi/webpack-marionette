const customAppRoutes = {};

// we need to convert Backbone routes to plain RegExps
function routeToRegExp(route) {
  return Backbone.Router.prototype._routeToRegExp.call(null, route);
}

// Creating the index of routes' regexes
_.each(__ROUTES__, (value, key) => {
  customAppRoutes[value.appName] = Object.keys(value.routes).map(routeToRegExp);
});

export default path => {
  const matcher = route => route.test(path);
  return _.findKey(customAppRoutes, routes => _.some(routes, matcher));
}
