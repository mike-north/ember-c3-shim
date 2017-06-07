if (typeof FastBoot === 'undefined') {
(function() {
  /* globals define, c3 */

  function generateModule(name, values) {
    define(name, [], function() {
      'use strict';

      return values;
    });
  }

  generateModule('c3', { 'default': c3 });
})();
}