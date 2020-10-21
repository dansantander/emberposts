import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';
import window from 'ember-window-mock';

module('Acceptance | posts', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting post list', async function(assert) {
    // eslint-disable-next-line no-undef
    server.createList('post', 10)
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('[data-test="post"]').exists({ count: 10 });
  });

  test('check post details', async function(assert) {
    // eslint-disable-next-line no-undef
    server.createList('post', 3)
    await visit('/posts/1');

    assert.dom('[data-test="post-image"]').exists();
    assert.dom('[data-test="post-title"]').exists();
    assert.dom('[data-test="post-body"]').exists();
  });

  test('writing a post', async function(assert) {
    await visit('/posts/new');
    await fillIn('#title', 'Title');
    await fillIn('#description', 'Description');
    await fillIn('#body', 'Body');
    await click('[data-test="publish"]');

    assert.equal(currentURL(), '/posts/1');
    assert.dom('[data-test="post-image"]').exists();
    assert.dom('[data-test="post-title"]').hasText('Title');
    assert.dom('[data-test="post-body"]').hasText('Body');
  });

  test('deleting a post', async function(assert) {
    // eslint-disable-next-line no-undef
    server.createList('post', 1)
    window.confirm = () => true;

    await visit('/');
    await click('[data-test="delete-post"]');

    assert.dom('[data-test="post"]').exists({ count: 0 });
  });

  test('canceling a post deletion', async function(assert) {
    // eslint-disable-next-line no-undef
    server.createList('post', 1)
    window.confirm = () => false;

    await visit('/');
    await click('[data-test="delete-post"]');

    assert.dom('[data-test="post"]').exists({ count: 1 });
  });

});
