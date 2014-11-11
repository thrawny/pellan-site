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
  })

  .filter('strong', function() {
    return function(input) {
      var split = input.split(',');
      split[0] = '<strong>' + split[0] + '</strong>';
      return split.join(',');
    };
  });