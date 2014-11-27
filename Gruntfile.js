'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      jade: {
        files: ['public/**/*.jade'],
        tasks: ['jade']
      },
    },

    concurrent: {
      target: {
        tasks: ['nodemon', 'watch', 'compass:watch'],
        options: {
            logConcurrentOutput: true
        }
      }
    },

    nodemon: {
      dev: {
        script: 'server/app.js',
      }
    },

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
          dest: 'dist',
          ext: '.html'
        }]
      }
    },

    compass: {
      watch: {
        options: {
          watch: true,
          sassDir: 'public/app',
          cssDir: 'dist/app'
        }
      }
    },
    autoprefixer: {
        css: {
            src: 'dist/app/app.css',
        }
    }
  });
  
  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['concurrent:target']);


};