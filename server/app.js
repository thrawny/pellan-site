/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');


// Setup server
var app = express();
var server = require('http').createServer(app);
require('./express')(app);
require('./routes')(app);

// Start server
server.listen(3000, undefined, function () {
  console.log('Express server listening on %d, in %s mode', 3000, app.get('env'));
});

// Expose app
exports = module.exports = app;