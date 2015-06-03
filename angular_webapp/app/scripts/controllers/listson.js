'use strict';

/**
 * @ngdoc function
 * @name angularWebappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularWebappApp
 */
angular.module('shopApp')
  .controller('sonController', function ($scope,$stateParams) {

    $scope.name = "hello 子路由!"+$stateParams.params1;

  });
