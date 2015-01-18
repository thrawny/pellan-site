angular.module('pellanApp')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutCtrl'
      });
  });