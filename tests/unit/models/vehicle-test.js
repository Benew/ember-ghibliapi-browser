import { moduleForModel, test } from 'ember-qunit';

moduleForModel('vehicle', 'Unit | Model | vehicle', {
  // Specify the other units that are required for this test.
  needs: ['model:person', 'model:film']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
