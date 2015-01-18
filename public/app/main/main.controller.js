angular.module('pellanApp')
  .controller('MainCtrl', ['$scope', '$state', function($scope, $state) {
    $scope.$state = $state;
  }]);