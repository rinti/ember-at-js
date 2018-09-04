'use strict';

module.exports = {
  name: 'ember-at-js',
  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/At.js/dist/js/jquery.atwho.js');
    app.import(app.bowerDirectory + '/Caret.js/dist/jquery.caret.js');
  }
};
