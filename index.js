/* jshint node: true */
'use strict';

module.exports = {
  name: 'c3',
  included: function included(app) {
    if (process.env.EMBER_CLI_FASTBOOT !== 'true') {
      app.import(app.bowerDirectory + '/c3/c3.min.js');
      app.import(app.bowerDirectory + '/c3/c3.min.css');
      app.import('vendor/ember-c3.js', {
        exports: {
          c3: ['default']
        }
      });
    }
  }
};
