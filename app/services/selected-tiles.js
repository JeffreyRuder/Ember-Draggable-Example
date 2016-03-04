import Ember from 'ember';

export default Ember.Service.extend({
  tiles: [],

  add(tile) {
    this.get('tiles').pushObject(tile);
  }
});
