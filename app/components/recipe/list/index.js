import template from './table.jst';
import templateItem from './table-item.jst';
import models from '../models.js';

let TableItem = Mn.View.extend({
  tagName: 'tr',
  template: templateItem,
  ui: {
    'item': '.js-item',
  },
  events: {
    'click @ui.item': 'onClick',
  },
  onClick: function(e) {
    e.preventDefault();
    Backbone.history.navigate(
      `recipe/${this.model.get('id')}`,
      {trigger: true}
    );
  }
});

let TableBody = Mn.CollectionView.extend({
  tagName: 'tbody',
  childView: TableItem,
  onRender: function() {
    this.listenTo(this.collection, 'change', this.render);
  }
})

export default Mn.View.extend({
  className: 'fullwidth',
  template,
  regions: {
    body: {
      el: 'tbody',
      replaceElement: true
    }
  },
  ui: {
    'previous': '.js-previous',
    'next': '.js-next',
  },
  events: {
    'click @ui.previous': 'onPrevious',
    'click @ui.next': 'onNext',
  },
  initialize: function() {
    this.collection = new models.RecipesCollection();
    this.collection.fetch();
  },
  onRender: function() {
    this.showChildView('body', new TableBody({
      collection: this.collection
    }));
  },
  onNext: function() {
    this.collection.getNextPage();
  },
  onPrevious: function() {
    this.collection.getPreviousPage();
  },
});
