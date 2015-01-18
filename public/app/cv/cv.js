angular.module('pellanApp')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('cv', {
        url: '/cv', 
        templateUrl: 'app/cv/cv.html',
        controller: 'CvCtrl'
      });
  });