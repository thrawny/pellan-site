/**
 * Express configuration
 */

'use strict';

var express = require('express');
var favicon = require('static-favicon');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var errorHandler = require('errorhandler');
var path = require('path');
//var config = require('./environment');

module.exports = function(app) {
  var env = app.get('env');

  var root = path.normalize(__dirname + '/..');

  app.set('views', '../' + '/server/views');
  app.set('view engine', 'jade');
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(cookieParser());
  
  if ('production' === env) {
    // app.use(favicon(path.join(config.root, 'public', 'favicon.ico')));
    // app.use(express.static(path.join(config.root, 'public')));
    // app.set('appPath', config.root + '/public');
    // app.use(morgan('dev'));
  }

  if ('development' === env || 'test' === env) {
    //app.use(require('connect-livereload')());
    app.use(express.static(path.join(root, '.tmp')));
    app.use(express.static(path.join(root, 'public')));
    app.set('appPath', 'public');
    app.use(morgan('dev'));
    app.use(errorHandler()); // Error handler - has to be last
  }
};