import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  climate: DS.attr('string'),
  terrain: DS.attr('string'),
  surfaceWater: DS.attr('string'),
  residents: DS.hasMany('person'),
  films: DS.hasMany('film')
});
