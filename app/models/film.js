import DS from 'ember-data';

let Film = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  director: DS.attr('string'),
  producer: DS.attr('string'),
  release_date: DS.attr('number'),
  rt_score: DS.attr('number'),
  url: DS.attr('string'),
  people: DS.hasMany('person', {
    async: true
  })
});


export default Film;
