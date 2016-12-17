import DetailView from '../components/recipe/detail/index.js';
import { expect } from 'chai';


describe('Detail View', () => {
  it('should exist', () => {
    expect(DetailView).to.exist;
  });
  it('and it should provide a constructor', () => {
    expect(new DetailView()).to.exist;
  });
});
