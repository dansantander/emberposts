import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | form', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(4);
    
    this.set('header', 'Header')
    this.set('title', 'Title')
    this.set('description', 'Description')
    this.set('body', 'Body')

    await render(hbs`<Form
      @header={{this.header}}
      @title={{this.title}}
      @description={{this.description}}
      @body={{this.body}}
    />`);

    assert.dom(this.element).includesText('Header');
    assert.dom(this.element).includesText('Title');
    assert.dom(this.element).includesText('Description');
    assert.dom(this.element).includesText('Body');
  });
});
