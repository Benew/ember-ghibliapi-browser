import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  vehicleClass: DS.attr('string'),
  length: DS.attr('string'),
  pilot: DS.belongsTo('person'),
  films: DS.belongsTo('film')
});
