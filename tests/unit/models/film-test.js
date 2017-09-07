import { moduleForModel, test } from 'ember-qunit';

moduleForModel('film', 'Unit | Model | film', {
  // Specify the other units that are required for this test.
  needs: ['adapter:application', 'serializer:application']
});

test('it exists', function(assert) {
  let model = this.subject();
  assert.ok(!!model);
});
