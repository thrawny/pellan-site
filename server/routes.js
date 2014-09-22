/**
 * Main application routes
 */

'use strict';

var errors = require('./errors');

var posts = require('./api/posts');

module.exports = function(app) {
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  app.route('/posts')
    .get(posts.list);

  app.route('/posts/:postid')
    .get(posts.view);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile('.tmp/index.html');
    });
};