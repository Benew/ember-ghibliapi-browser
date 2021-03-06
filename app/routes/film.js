import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let locations = this.store.findAll('location')
    .then(results =>
      results.filter(location =>
        !!location.get('films')
        .find(film =>
          film.get('id') === params.film_id
        )
      )
    );
    let vehicles = this.store.findAll('vehicle')
    .then(results =>
      results.filter(vehicle =>
        vehicle.get('films').get('id') === params.film_id
      )
    );
    return Ember.RSVP.hash({
      film: this.store.findRecord('film', params.film_id),
      locations,
      vehicles
    });
  }
});
