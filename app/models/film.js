import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  director: DS.attr('string'),
  producer: DS.attr('string'),
  release_date: DS.attr('number'),
  rt_score: DS.attr('number'),
  url: DS.attr('string')
});
