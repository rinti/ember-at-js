import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller) {
    this._super(...arguments);
    new Ember.RSVP.Promise(function() {
      setTimeout(function() {
        const settings = [{
          at: '@',
          data: ['one', 'two', 'three']
        }];
        controller.set('asyncSettings', settings);
      }, 5000);
    });
  }
});
