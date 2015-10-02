module.exports = {
  description: 'Installation blueprint for ember-c3-shim',

  normalizeEntityName: function() {},

  afterInstall: function(options) {
    return this.addBowerPackageToProject('c3', '~0.4.10').then(function () {
      return this.addAddonToProject('ember-d3');
    }.bind(this));
  }
};
