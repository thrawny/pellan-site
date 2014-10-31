'use strict';

angular.module('pellanApp')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl'
      });
  });