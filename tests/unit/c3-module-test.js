import { module, test } from 'qunit';
import c3 from 'c3';

module('c3 as an ES6 module');

// Replace this with your real tests.
test('it is a valid module', function(assert) {
  assert.ok(c3);
});

test('it has the expected top-level objects on it', function(assert) {
  assert.ok(c3.version, 'version is present');
  assert.ok(c3.chart, 'chart is present');
});
