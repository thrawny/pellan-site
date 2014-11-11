'use strict';

angular.module('pellanApp')
  .controller('MainCtrl', function($scope, $state) {
    $scope.$state = $state;
  });