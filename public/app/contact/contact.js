angular.module('pellanApp')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactCtrl'
      });
  });