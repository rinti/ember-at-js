import Ember from 'ember';

export default Ember.Controller.extend({
  atValue: 'lorem ipsum <a href>@tomster</a> lala',
  atSettings: [{
    data: ['tomster', 'zoey'],
    insertTpl: "<a href>@${name}</a>"
  },
  {
    at: '#',
    data: ['test', 'lorem', 'ipsum'],
    insertTpl: "<a href>#${name}</a>"
  }],
  emojiValue: "<img src='http://a248.e.akamai.net/assets.github.com/images/icons/emoji/girl.png' height='20' width='20'/>",
  emojiSettings: [{
    at: ':',
    displayTpl: "<li><img src='http://a248.e.akamai.net/assets.github.com/images/icons/emoji/${name}.png' height='20' width='20'/> ${name} </li>",
    insertTpl: "<img src='http://a248.e.akamai.net/assets.github.com/images/icons/emoji/${name}.png' height='20' width='20'/>",
    data: [
      {id: 1, name: 'smile'},
      {id: 2, name: 'iphone'},
      {id: 3, name: 'girl'}
    ]
  }],
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
