import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('atjs-textarea', 'Integration | Component | atjs textarea', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{at-js}}`);
  assert.equal(this.$().text().trim(), '');
});

test('it renders values', function(assert) {
  const html = '<a href>lorem ipsum</a>';
  this.set('value', html);

  this.render(hbs`{{at-js value=value}}`);
  assert.equal(this.$().text().trim(), 'lorem ipsum');
});
