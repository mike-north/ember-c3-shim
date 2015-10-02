module.exports = {
  description: 'Installation blueprint for ember-c3-shim'
  normalizeEntityName: function() {},

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function(options) {
    this.addAddonToProject('ember-d3');
  }
};
