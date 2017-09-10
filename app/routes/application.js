import Ember from 'ember';

export default Ember.Route.extend({
  history: [],
  historyTracking: true,
  actions: {
    willTransition(){
      if(this.get('historyTracking')){
        this.get('history').push(window.location.pathname);
      } else {
        this.set('historyTracking', true);
      }
      this._super(...arguments);
    },
    goBack: function() {
      this.set('historyTracking', false);
      let lastPath = this.get('history').pop();
      if(lastPath){
        this.transitionTo(lastPath);
      } else {
        this.transitionTo('application');
      }
    }
  }
});
