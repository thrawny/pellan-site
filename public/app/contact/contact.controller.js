angular.module('pellanApp')
  .controller('ContactCtrl', function($scope, $http) {
    $scope.contact = {};
    $scope.submitted = false;
    $scope.submitStatus = "";
    // $scope.response;

    $scope.submit = function(form) {
      $scope.submitted = true;
      if (form.$valid) {
        $scope.response = "Tack för ditt meddelande!";
        form.$setPristine();
        $scope.submitStatus = "valid";
        $http.post('/api/contact', $scope.contact).
          success(function(data) {

          }).
          error(function(data) {

          });

        $scope.contact = {};
      } 
      else {
        $scope.submitStatus = "invalid";
        $scope.response = "Ett eller flera fält är inte ifyllda korrekt.";
      }
    };

  });