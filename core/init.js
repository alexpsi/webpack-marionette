import 'babel-polyfill';
import Router from './router';
import Initial from './../app/initialize.js';
import Layout from './../app/theme/layout.js';

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
$(document).on('click', 'a[data-sref]', function(e) {
  e.preventDefault();
  Backbone.history.navigate(
     Bb.history.fragment + '/' +
     $(this).attr('data-sref'),
     {trigger: true}
  );
});
