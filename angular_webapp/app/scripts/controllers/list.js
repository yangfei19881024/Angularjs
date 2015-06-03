'use strict';

/**
 * @ngdoc function
 * @name angularWebappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWebappApp
 */
angular.module('shopApp.controller')
.controller('listController', function ($scope,dataService,swipeData) {

  $scope.users = dataService.getData();

  $scope.swipes = swipeData;
  // $scope.users = [
  //   {name:"yangfei",age:12},
  //   {name:"tomcat",age:12},
  //   {name:"gaoya1",age:12},
  //   {name:"gaoya2",age:12},
  //   {name:"gaoya3",age:12},
  //   {name:"gaoya4",age:12},
  //   {name:"gaoya5",age:12},
  //   {name:"gaoya6",age:12},
  //   {name:"gaoya7",age:12},
  //   {name:"gaoya8",age:12},
  //   {name:"gaoya9",age:12},
  //   {name:"gaoya10",age:12},
  //   {name:"gaoya11",age:12}
  // ]
  //

})
