define(['angular', 'angular-route'], function(angular) {
  var NutrientScheduleWebApp = angular.module('NutrientScheduleWebApp', ['ngRoute']);

  NutrientScheduleWebApp.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: 'partials/home.html'
    });
  });
});