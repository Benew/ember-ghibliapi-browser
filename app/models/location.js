import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  climate: DS.attr('string'),
  terrain: DS.attr('string'),
  surfaceWater: DS.attr('string'),
  films: DS.hasMany('film', {
    async: true
  }),
  residents: DS.hasMany('person', {
    async: true
  })
});
