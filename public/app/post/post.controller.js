'use strict';

angular.module('thrawnyApp')
  .controller('PostCtrl', function($scope, $http, $routeParams, $sce) {
    $scope.test = 'Hellooow';
    $http.get('/posts/' + $routeParams.postId)
      .success(function(data) {
        $scope.title = $routeParams.postId
        $scope.post = function() {
          return $sce.trustAsHtml(data);
        };
      })
      .error(function(data) {

      });
  });