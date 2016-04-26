import Ember from 'ember';
import layout from '../templates/components/at-js';
const { merge, observer } = Ember;

export default Ember.Component.extend({
  layout,
  settings: [{}],
  value: null,
  classNames: ['at-js'],
  tagName: 'div',
  init() {
    this._super(...arguments);
    this.set('internalValue', this.get('value'));
  },
  didInsertElement() {
    this.$().attr('contenteditable', 'true');
    this._setupTextarea();
  },
  keyUp(event) {
    this.set('value', this.$().html());
  },
  _settingsListener: observer('settings', function() { this._setupTextarea() }),
  _setupTextarea() {
    const defaults = {at: '@'};

    for(var i=0; i < this.get('settings').length; i++) {
      let settings = merge(defaults, this.get('settings')[i]);
      this.$().atwho(settings);
    }
  },
  destroy() {
    this.$().atwho('destroy');
  }
});
