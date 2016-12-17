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
    pageSize: 2
  },
  queryParams: {
    currentPage: '_page',
    pageSize: '_limit'
  }
});

export default {
  RecipeModel,
  RecipesCollection,
}


/*
schema: {
  title:      { type: 'Select', options: ['Mr', 'Mrs', 'Ms'] },
  name:       'Text',
  email:      { validators: ['required', 'email'] },
  birthday:   'Date',
  password:   'Password',
  address:    { type: 'NestedModel', model: Address },
  notes:      { type: 'List', itemType: 'Text' },
  notesa: 'TextArea'
},
*/
