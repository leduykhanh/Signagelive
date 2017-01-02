import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('gravatar-pic', 'Integration | Component | gravatar pic', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{gravatar-pic}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#gravatar-pic}}
      template block text
    {{/gravatar-pic}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
