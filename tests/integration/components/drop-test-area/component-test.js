import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('drop-test-area', 'Integration | Component | drop test area', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{drop-test-area}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#drop-test-area}}
      template block text
    {{/drop-test-area}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
