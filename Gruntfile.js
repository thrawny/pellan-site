'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    jade: {
      compile: {
        options: {
          data: {
            debug: false
          },
          pretty: true
        },
        files: [{
          expand: true,
          cwd: 'public',
          src: '**/*.jade',
          dest: '.tmp',
          ext: '.html'
        }]
      }
    }

  });

  grunt.loadNpmTasks("grunt-contrib-jade");

};