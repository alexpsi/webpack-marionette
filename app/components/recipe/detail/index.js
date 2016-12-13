import template from './template.jst';
import models from '../models.js';
import marked from 'marked';

export default Mn.View.extend({
  template: template,
  initialize: function() {
    this.model = new models.RecipeModel({id: this.options.id});
    this.model.set('loading', true);
    this.model.fetch().then(() => this.model.set('loading', false));
  },
  modelEvents: {
    'change': 'render',
  },
  templateContext: {
    marked: (text) => marked(text)
  },
});
