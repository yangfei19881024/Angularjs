'use strict';

/**
 * @ngdoc overview
 * @name angularWebappApp
 * @description
 * # angularWebappApp
 *
 * Main module of the application.
 */
    angular.module('shopApp.controller',[]);
    angular.module('shopApp.directive',[]);
    angular.module('shopApp.service',[]);

    angular.module('shopApp', [
       'ngCookies',
       'ngResource',
       'ngSanitize',
       'ui.router',
       'ui.sortable',
       'LocalStorageModule',
       'shopApp.controller',
       'shopApp.directive',
       'shopApp.service',
       'pasvaz.bindonce'
    ])
