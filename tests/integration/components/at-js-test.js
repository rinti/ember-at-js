import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | atjs textarea', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{at-js}}`);
    assert.dom('*').hasText('');
  });

  test('it renders values', async function(assert) {
    const html = '<a href>lorem ipsum</a>';
    this.set('value', html);

    await render(hbs`{{at-js value=value}}`);
    assert.dom('*').hasText('lorem ipsum');
  });
});
