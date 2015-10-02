/* jshint node: true */
'use strict';

module.exports = {
  name: 'c3',
  included: function included(app) {
    app.import(app.bowerDirectory + '/c3/c3.min.js');
  }
};
