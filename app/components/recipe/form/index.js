import 'backbone-forms';
import template from './template.jst';
import models from '../models.js';

export default Mn.View.extend({
  template,
  regions: {
    form: '.js-form',
    buttons: '.js-buttons'
  },
  initialize: function() {
    this.model = new models.RecipeModel({id: this.options.id});
    this.model.set('loading', true);
    this.form = new Backbone.Form({
      model: this.model
    });
    this.model.fetch().then(() => {
      this.model.set('loading', false);
      this.render();
      this.showChildView('form', new Backbone.Form({
        model: this.model
      }));
    });
  },
});
