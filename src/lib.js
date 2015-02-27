/**
 * My Lib description...
 */

//Example of importing some other lib through NPM
// var RSVP = require('rsvp');
// var Promise = RSVP.Promise;
var OtherModule = require('./module');

module.exports = function() {
  console.log('My lib!');
}();