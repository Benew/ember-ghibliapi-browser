import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  gender: DS.attr('string'),
  age: DS.attr('string'),
  eye_color: DS.attr('string'),
  hair_color: DS.attr('string'),
  films: DS.hasMany('film', {
    async: true
  })
});
