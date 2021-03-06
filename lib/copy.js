var chalk = require('chalk')
// Force colors as playing with /dev/tty might disable it
chalk.enabled = true
var copy = require('copy-paste').copy
var tty = require('./direct_tty')
var label = chalk.green('copied to Clipboard: ')

module.exports = function (text, callback) {
  copy(text)

  // If stdout isn't the terminal
  // write an extract of the text to the terminal
  if (!(process.stdout.isTTY)) {
    if (text.length > 20) {
      label += text.substring(0,20) + '...'
    } else {
      label += text
    }
    label += '\n'
  }

  tty.write(label, function () {
    // Using console.log instead of process.stdout.write
    // as it will block and only once done exiting the process
    console.log(text)
    if (callback) {
      callback()
    }
  })
}
