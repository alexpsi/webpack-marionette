import 'babel-polyfill';
import Router from './router';
import Initial from './../app/initialize.js';
import Layout from './../app/theme/layout.js';
import PageableCollection from 'backbone.paginator';
Backbone.PageableCollection = PageableCollection;

var App = new Marionette.Application({
  onStart: function(options) {
    Initial().then(() => {
      let layout = new Layout({el: 'body', regions: Initial.regions})
      layout.render();
      let router = new (Router(layout));
      Backbone.history.start();
    });
  }
});

$(document).ready(() => App.start());
