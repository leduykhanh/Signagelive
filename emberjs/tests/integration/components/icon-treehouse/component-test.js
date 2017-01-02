import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('icon-treehouse', 'Integration | Component | icon treehouse', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{icon-treehouse}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#icon-treehouse}}
      template block text
    {{/icon-treehouse}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
