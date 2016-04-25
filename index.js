/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-atjs',
  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/At.js/dist/js/jquery.atwho.js');
    app.import(app.bowerDirectory + '/Caret.js/dist/jquery.caret.js');
  }
};
