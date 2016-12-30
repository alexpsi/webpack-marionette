import PageableCollection from 'backbone.paginator';

let RecipeModel = Bb.Model.extend({
  urlRoot: 'http://localhost:3000/recipes',
  //url: 'http://localhost:3000/recipes',
  defaults: {
    prep: '-',
    cook: '-',
    portions: '-',
  },
  schema: {
    title: { type: 'Text', validators: ['required'] },
    prep: 'Text',
    cook: 'Text',
    directions: { type: 'TextArea', validators: ['required'] },
    ingredients: { type: 'TextArea', validators: ['required'] },
  },
});

let RecipesCollection = PageableCollection.extend({
  url: 'http://localhost:3000/recipes',
  model: RecipeModel,
  mode: 'infinite',
  state: {
    pageSize: 20,
  },
  queryParams: {
    currentPage: '_page',
    pageSize: '_limit'
  },
  parseState: function(response) {
    return { totalRecords: this.totalRecords || 0};
  },
  fetch: function(options) {
    var jqXHR = PageableCollection.prototype.fetch.call(this, options);
    jqXHR.done(() => {
      this.totalRecords = parseInt(
        jqXHR.getResponseHeader('X-Total-Count')
      );
    });
    return jqXHR;
  }
});

export default {
  RecipeModel,
  RecipesCollection,
}
