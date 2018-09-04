import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  atValue: 'lorem ipsum <a href>@tomster</a> lala',
  atSettings: computed(function() {
    return [{
      data: ['tomster', 'zoey'],
      insertTpl: "<a href>@${name}</a>"
    }, {
      at: '#',
      data: ['test', 'lorem', 'ipsum'],
      insertTpl: "<a href>#${name}</a>",
      callbacks: {
        beforeInsert(value) {
          alert('i am a before insert callback ' + value);
        }
      }
    }];
  }),

  emojiValue: "<img src='http://a248.e.akamai.net/assets.github.com/images/icons/emoji/girl.png' height='20' width='20'/>",
  emojiSettings: computed(function() {
    return [{
      at: ':',
      displayTpl: "<li><img src='http://a248.e.akamai.net/assets.github.com/images/icons/emoji/${name}.png' height='20' width='20'/> ${name} </li>",
      insertTpl: "<img src='http://a248.e.akamai.net/assets.github.com/images/icons/emoji/${name}.png' height='20' width='20'/>",
      data: [
        {id: 1, name: 'smile'},
        {id: 2, name: 'iphone'},
        {id: 3, name: 'girl'}
      ]
    }];
  }),

  asyncSettings: computed(function() {
    return [{
      at: ':',
      insertTpl: "<a href>@${name}</a>",
      data: [
      ]
    }];
  }),
  asyncValue: '',

  actions: {
    changeAtSettings() {
      var newSettings = [{
        data: ['asdf', 'qwer']
      },
      {
        at: '#',
        data: ['test']
      }];
      this.set('atSettings', newSettings);
    }
  }
});
