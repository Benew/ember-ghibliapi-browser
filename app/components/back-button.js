import Ember from 'ember';

export default Ember.Component.extend({
  routing: Ember.inject.service('-routing'),
  shouldDisplay: Ember.computed('routing.router.currentURL', function(){
    return this.get('routing.router.currentURL') !== this.get('routing.router.rootURL');
  }),
  actions: {
    click() {
      this.sendAction('action');
    }
  }
});
