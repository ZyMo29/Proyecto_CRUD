import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('friends/edit-from', 'Integration | Component | friends/edit from', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{friends/edit-from}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#friends/edit-from}}
      template block text
    {{/friends/edit-from}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
