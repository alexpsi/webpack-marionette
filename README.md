# Webpack + MarionetteJS + Babel/ES6

A small boilerplate introducing [Webpack](https://webpack.github.io/) and es6 features through [Babel](https://babel.github.io/) to a CRUD Marionette/Backbone application.

## Getting started

* Install:
  * Clone the repository: `git clone https://github.com/alexpsi/webpack-marionette`
  * Inside this folder run: `npm install`
* Build:
  * `npm run build` - builds you project inside the `/dist` directory, notice that each route has a separate bundle thus allowing for lazy loading.
  * `npm run analyze` - creates a size report for bundled libraries
* Development:
  * `npm run dev` - launches the project through webpack-dev-server utilizing
  the configuration from webpack-dev.config and hotreload for css assets.
  * `npm run dash` - As above but uses webpack-dashboard
  * `npm run eject` - Deletes sample application leaving only the core files.
* Test:
  * `npm test` - Searches inside the tests folder of each component directory for
  .js files and runs them with mocha and chai over Karma.
  * `npm run tdd` - As above but watches files for changes and reruns tests.



## Example app
  The example app is an editable Cookbook, it utilizes a list of recipes taken
  from https://github.com/mikeizbicki/ucr-cs100 and packaged as a json file which
  is server by json-server, to run the json-server run `npm run json`.
