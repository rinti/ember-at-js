import Ember from 'ember';
import layout from '../templates/components/atjs-textarea';
const { merge, observer } = Ember;

export default Ember.Component.extend({
  layout,
  settings: [{}],
  didInsertElement() {
    this.$().attr('contenteditable', 'true');
    this._setupTextarea();
  },
  _settingsListener: observer('settings', function() { this._setupTextarea() }),
  _setupTextarea() {
    const defaults = {at: '@'};
    for(var i=0; i < this.get('settings').length; i++) {
      let settings = merge(defaults, this.get('settings')[i]);
      this.$().atwho(settings);
    }
  }
});
