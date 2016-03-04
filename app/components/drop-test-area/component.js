import Ember from 'ember';

export default Ember.Component.extend({
  selectedTiles: Ember.inject.service(),

  actions: {
    dropped(tileId) {
      var selectedTiles = this.get('selectedTiles.tiles');
      var tile = this.get('model').findBy('id', parseInt(tileId));

      if (!selectedTiles.contains(tile)) {
        return this.get('selectedTiles').add(tile);
      }
    },

    removeTile(tile) {
      return this.get('selectedTiles.tiles').removeObject(tile);
    }
  }
});
