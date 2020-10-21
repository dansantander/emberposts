import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | card-post', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    this.set('', 'Post')

    await render(hbs`<CardPost
     @post={{this.post.title}}
    />`);

    assert.dom(this.element).includesText('Post');
  });
});
