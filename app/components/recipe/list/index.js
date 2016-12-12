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
  onClick: function() {
    console.log(this.model.get('title'))
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
  tagName: 'table',
  className: 'table table-hover',
  template,
  regions: {
    body: {
      el: 'tbody',
      replaceElement: true
    }
  },
  initialize: function() {
    this.collection = new models.RecipesCollection();
    this.collection.fetch();
  },
  onRender: function() {
    this.showChildView('body', new TableBody({
      collection: this.collection
    }));
  }
});
