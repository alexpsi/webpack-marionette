import 'backbone-forms';
import template from './template.jst';
import models from '../models.js';

export default Mn.View.extend({
  template,
  ui: {
    'save': '.js-save',
  },
  events: {
    'click @ui.save': 'onSave',
  },
  regions: {
    form: '.js-form',
  },
  modelEvents: {
    'change:loading': 'render',
  },
  initialize: function() {
    window.probe = this;
    this.model = new models.RecipeModel(this.options);
    this.model.set('loading', true);

    this.model.fetch().then(() => {
      this.form = new Backbone.Form({
        model: this.model
      });
      this.model.set('loading', false);
    });
  },
  onRender: function() {
    if (this.model.get('loading')) return;
    this.showChildView('form', this.form);
  },
  onSave: function() {
    this.form.commit();
    this.model.set('loading', true);
    this.model.save().then(() => {
      this.form = new Backbone.Form({
        model: this.model
      });
      this.model.set('loading', false);
    });
  }
});
