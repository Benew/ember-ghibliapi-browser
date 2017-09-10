import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  storage: storageFor('favorites'),
  type: "",
  id: "",
  identifier: Ember.computed('type', 'id', function(){
    return `${this.get('type')}:${this.get('id')}`;
  }),
  isFavorite: Ember.computed('identifier', function(){
    return this.get('storage').includes(this.get('identifier'));
  }),
  actions: {
    toggleFavorite(){
      if(this.get('isFavorite')){
        this.get('storage').removeObject(this.get('identifier'));
      } else {
        this.get('storage').addObject(this.get('identifier'));
      }
      this.notifyPropertyChange('isFavorite');
    }
  }
});
