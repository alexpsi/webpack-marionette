# Webpack and MarionetteJS

A small boilerplate introducing [Webpack](https://webpack.github.io/) and es6 features through [Babel](https://babel.github.io/) to a CRUD Marionette/Backbone application.

## Getting started

* Install
  * Clone the repository: `git clone https://github.com/alexpsi/webpack-marionette`
  * Inside this folder run: `npm install`

* Build
  * `npm run build` - builds you project inside the `/dist` directory, notice that each route has a separate bundle thus allowing for lazy loading.
  * `npm run analyze` - creates a size report for bundled libraries

* Development
  * `npm run dev` - launches the project through webpack-dev-server utilizing
  the configuration from webpack-dev.config and hotreload for css assets.
  * `npm run dash` - As above but uses webpack-dashboard
  * `npm run eject` - Deletes sample application leaving only the core files.

* Test
  * `npm test` - Searches inside the tests folder of each component directory for
  .js files and runs them with mocha and chai over Karma.
  * `npm run tdd` - As above but watches files for changes and reruns tests.

## Features

  * Utilizes Backbone router along with Webpack requireContext so additional libraries utilized by a certain route are lazily added when the route loads.
  The routes are defined in the routes directory and a custom webpack plugin collects routes definition from the comments inside the routes folder.

  * ES6 async/await syntax

  * A basic structure, consisting of 3 folders, `components` which is used as a
  place to store your views, `routes` which is where you define your routes and
  route initializations (check example app for sample route definition), `theme` which stores tha application layout as well as global stylesheets.

## Example app
  The example app is an editable Cookbook, it utilizes a list of recipes taken
  from https://github.com/mikeizbicki/ucr-cs100 and packaged as a json file which
  is server by json-server, to run the json-server run `npm run json`, then in another terminal run `npm run dev` and navigate to localhost:1337. Inside the example app
  you can find a full collection of views and models allowing to do a full set of CRUD operations on a REST resource. The example app uses [Backbone.paginator](https://github.com/backbone-paginator/backbone.paginator) and
  [Backbone.forms](https://github.com/backbone-paginator/backbone.paginator) for creating forms based on the schemas in the models. 
