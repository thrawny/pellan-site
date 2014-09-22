'use strict';

angular.module('thrawnyApp')
  .controller('HomeCtrl', function($scope, $http) {
    $http.get('/posts')
      .success(function(data) {
        $scope.posts = data;
      })
      .error(function(data) {

      });
  });