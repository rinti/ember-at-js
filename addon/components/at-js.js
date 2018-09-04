import Component from '@ember/component';
import { merge } from '@ember/polyfills';
import { computed, observer } from '@ember/object';
import layout from '../templates/components/at-js';

export default Component.extend({
  layout,
  settings: computed(function() {
    return [{}]
  }),
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
  keyUp() {
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
