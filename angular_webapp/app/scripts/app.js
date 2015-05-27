'use strict';

/**
 * @ngdoc overview
 * @name angularWebappApp
 * @description
 * # angularWebappApp
 *
 * Main module of the application.
 */
    angular.module('mytodoApp', [
       'ngCookies',
       'ngResource',
       'ngSanitize',
       'ngRoute',
       'ui.sortable',
       'LocalStorageModule'
    ])
   .config(['localStorageServiceProvider', function(localStorageServiceProvider){
       localStorageServiceProvider.setPrefix('ls');
   }])
   .config(function ($routeProvider) {
       $routeProvider
         .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
         })
         .otherwise({
            redirectTo: '/'
         });
   });
