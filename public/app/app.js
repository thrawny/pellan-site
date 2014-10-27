'use strict';

angular.module('pellanApp', [
  'ngSanitize',
  'ngRoute',
  'ngAnimate'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(false);
  });