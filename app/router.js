import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('films');
  this.route('film', { path: '/film/:film_id' });
  this.route('person', { path: '/person/:id' });
  this.route('vehicle');
});

export default Router;
