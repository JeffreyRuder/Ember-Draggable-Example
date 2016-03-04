import Ember from 'ember';

var tiles = [{
  id: 1,
  name: "foo",
}, {
  id: 2,
  name: "bar"
}];

export default Ember.Route.extend({
  model() {
    return tiles;
  }
});
