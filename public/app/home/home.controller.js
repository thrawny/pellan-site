'use strict';

angular.module('thrawnyApp')
  .controller('HomeCtrl', function($scope, $http, $sce) {
    $scope.posts = [];
    $http.get('/posts')
      .success(function(posts) {
        posts.forEach(function(post) {
          $http.get('/posts/'+post.path)
            .success(function(html) {
              post.body = function() { return $sce.trustAsHtml(html); };
              $scope.posts.push(post);
            })
        })
      })
      .error(function(data) {

      });
    

  });