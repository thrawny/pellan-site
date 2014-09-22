'use strict';

angular.module('thrawnyApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/post/:postId', {
        templateUrl: '/app/post/post.html',
        controller: 'PostCtrl'
      });
  });