/* eslint-env node */
'use strict';

const fs = require('fs');

const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const fbtransform = require('fastboot-transform');

module.exports = {
  name: 'c3',
  included: function included(app) {
    app.import('vendor/c3/c3.min.js');
    app.import(`${app.bowerDirectory  }/c3/c3.min.css`);
    app.import('vendor/ember-c3.js', {
      exports: {
        c3: ['default']
      }
    });
  },
  treeForVendor: function(defaultTree) {
    const app = this._findHost();
    const assetPath =__dirname + '/' + app.bowerDirectory + '/c3/';

    if (fs.existsSync(assetPath)) {
      let c3MinJs = new Funnel(assetPath, {
        files: ['c3.min.js'],
        destDir: 'c3'
      });
      return new mergeTrees([defaultTree, fbtransform(c3MinJs)]);
    } else {
      return defaultTree;
    }
  }
};
