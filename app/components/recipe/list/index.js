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
    'search': '.js-search',
  },
  events: {
    'keyup @ui.search': 'onSearch',
    'click @ui.previous': 'onPrevious',
    'click @ui.next': 'onNext',
  },
  initialize: function() {
    this.collection = new models.RecipesCollection();
    this._search = _.debounce(_.bind(this.search, this), 2000);
    window.probe = this.collection;
    this.collection.fetch();
    this.listenTo(this.collection, 'reset', () => {
      if (this.collection.hasPreviousPage()) {
        this.ui.previous.removeClass('is-hidden')
      } else {
        this.ui.previous.addClass('is-hidden')
      }
      if (this.collection.hasNextPage()) {
        this.ui.next.removeClass('is-hidden')
      } else {
        this.ui.next.addClass('is-hidden')
      }
    });
  },
  onSearch: function(e) {
    var query = e.target.value;
    this._search(query);
  },
  search: function(query) {
    this.ui.search.attr('disabled', true);
    if (query && query.length > 0) {
      this.collection.switchMode('infinite');
      this.collection.fetch({ data: {
        q: query
      }}).then(() => {
        this.ui.search.attr('disabled', false);
      });
    } else {
      this.collection.switchMode('client');
      this.collection.fetch().then(() => {
        this.ui.search.attr('disabled', false);
      });
    }
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
