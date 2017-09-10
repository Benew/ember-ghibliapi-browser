import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    let locations = this.store.findAll('location')
    .then(results =>
      results.filter(location =>
        !!location.get('residents')
        .find(resident =>
          resident.get('id') === params.id
        )
      )
    );
    return Ember.RSVP.hash({
      person: this.store.findRecord('person', params.id),
      locations
    });
  }
});
