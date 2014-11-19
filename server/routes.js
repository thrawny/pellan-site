/**
 * Main application routes
 */

'use strict';

var errors = require('./errors');
var mail = require('./mail');

module.exports = function(app) {
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(|app|libs)/*')
   .get(errors[404]);

  app.route('/api/contact')
    .post(mail);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile('public/index.html');
    });
};