# ember-at-js

Demo available here: [http://ember-at-js.rinti.se/](http://ember-at-js.rinti.se/)

The component takes two arguments, `settings` and `value`.

Example:

```hbs
  {{at-js settings=mySettings value=model.body}}
```

Different settings can be found at the [At.js documentation](https://github.com/ichord/At.js/wiki/Base-Document#settings).

## Installation

`ember install ember-at-js`

This addon do not automatically import the default styles for you. If you want the At.js default styles add:

`app.import(app.bowerDirectory + '/At.js/dist/css/jquery.atwho.css');`

to your `ember-cli-build.js`

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
