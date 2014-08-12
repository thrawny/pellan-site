/**
 * Main application routes
 */

'use strict';

module.exports = function(app) {
  
  // All undefined asset or api routes should return a 404
  

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};