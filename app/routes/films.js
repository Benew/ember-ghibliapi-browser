import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('film')
      .then(films => films.sortBy('release_date').reverse());
  }
});
