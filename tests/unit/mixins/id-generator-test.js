import Ember from 'ember';
import IdGeneratorMixin from 'super-rentals/mixins/id-generator';
import { module, test } from 'qunit';

module('Unit | Mixin | id generator');

// Replace this with your real tests.
test('it works', function(assert) {
  let IdGeneratorObject = Ember.Object.extend(IdGeneratorMixin);
  let subject = IdGeneratorObject.create();
  assert.ok(subject);
});
