'use strict';

angular.module('pellanApp', [
  'ui.router',
  'ngSanitize',
  'ngAnimate'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(false);
  });