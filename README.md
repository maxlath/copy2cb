# copy2cb
A small module for CLI tools to write to both `process.stdout` and the clipboard.

This is mostly just a wrapper of the awesome [copy-paste](http://npmjs.com/package/copy-paste) module.

## Install
```sh
npm install --save copy2cb
```

## How-to

```javascript
var copy2cb = require('copy2cb')
var text = 'some string you want your command to write to stdout and also copy to your clipboard'
copy2cb(text, function() { process.exit(0) })
```

## Live examples
* in [wikidata-cli](https://github.com/maxlath/wikidata-cli/blob/master/bin/lib/copy.js)
* in [text-transform-cli](https://github.com/maxlath/text-transform-cli/blob/master/lib/copy.js)
