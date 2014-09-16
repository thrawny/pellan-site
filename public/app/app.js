'use strict';

angular.module('thrawnyApp', [
  'ngSanitize',
  'ngRoute',
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });