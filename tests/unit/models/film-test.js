import { moduleForModel, test } from 'ember-qunit';

moduleForModel('film', 'Unit | Model | film', {
  // Specify the other units that are required for this test.
  needs: ['adapter:application', 'serializer:application']
});

test('it exists', function(assert) {
  let model = this.subject();
  assert.ok(!!model);
});

test('its records have `string` title', function(assert) {
  let store = this.store();
  const done = assert.async();
  store.findAll('film')
  .then(function(films){
    films.forEach(function(film){
      assert.ok(typeof film.get('title') === 'string');
    });
    done();
  })
  .catch(done);
});
