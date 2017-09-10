import Ember from 'ember';

export default Ember.Controller.extend({
  search: false,
  searchTerms: "",
  filteredModel: [],
  actions: {
    toggleSearch(){
      this.set('search', !this.get('search'));
      this.set('searchTerms', "");
    }
  },
  modelObserver: Ember.observer('model', function(/*sender, key, value, rev*/) {
    this.updateFilteredModel();
  }),
  searchTermObserver: Ember.observer('searchTerms', function(/*sender, key, value, rev*/) {
    this.updateFilteredModel();
  }),
  updateFilteredModel(){
    this.set('filteredModel', this.model.filter(film =>
      film.get('title').toLowerCase().indexOf(this.searchTerms.toLowerCase()) !== -1
    ));
  }
});
