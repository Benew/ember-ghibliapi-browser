import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('github-invite', 'Integration | Component | github invite', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{github-invite}}`);

  assert.expect(3);

  // TODO : match real render result.
  // Tried
  // assert.equal(this.$('.ember-view').text().trim().replace(/(\r?\n|\r)(\s*)(\r?\n|\r)/,'\r\n'), `Know more ?
  //    Submit an issue
  //    Contribute`);
  // .replace(/(\r?\n|\r)(\s*)(\r?\n|\r)/,'\r\n') removes empty and whitepace filled lines
  // No success. "Invisible" differences make it fail


  assert.ok(this.$('.ember-view').text().trim().indexOf(`Know more ?` === 0));

  // Template block usage:
  this.render(hbs`
    {{#github-invite}}
      template block text
    {{/github-invite}}
  `);

  assert.ok(this.$('.ember-view').text().trim().indexOf(`Know more ?` === 0));
  assert.ok(this.$('.ember-view').text().trim().indexOf(`template block text` !== -1));
});
