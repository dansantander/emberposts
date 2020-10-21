import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Unit | Route | index', function(hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:index');
    assert.ok(route);
  });

  test('model is loading correctly', async function(assert) {
    // eslint-disable-next-line no-undef
    server.createList('post', 10)
    const route = this.owner.lookup('route:index');
    const model = await route.model();

    assert.equal(model.length, 10, 'The model has been loaded successfully');
  });
});
