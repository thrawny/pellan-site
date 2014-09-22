'use strict';

var glob = require('glob');
var path = require('path');
var fs = require('fs');
var marked = require('marked');

var root = path.normalize(__dirname + '../../../');


module.exports.view = function (req, res) {
  fs.readFile(root + '/posts/' + req.params.postid +'.md', function(err, data) {
    res.send(marked(data.toString()));
  })
}

module.exports.list = function (req, res) {

  glob(root+'/posts/*.md', function (err, posts) {

    var list = [];
    posts.forEach(function(post) {
      var name = path.basename(post, '.md');
      var date = name.substr(0,10).replace(new RegExp('_', 'g'), '-');
      var title = name.substr(11).replace(new RegExp('_', 'g'), ' ');
      
      list.push( { 'title': title, 'date': date, 'path': name } );
    });

    res.json(list);
  });
}