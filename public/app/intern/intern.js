angular.module('pellanApp')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('intern', {
        url: '/intern',
        templateUrl: 'app/intern/intern.html',
        controller: 'InternCtrl'
      });
  });