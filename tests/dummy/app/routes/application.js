import { Promise } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller) {
    this._super(...arguments);
    new Promise(function() {
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
