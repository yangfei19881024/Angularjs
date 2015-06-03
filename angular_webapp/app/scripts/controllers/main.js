'use strict';

/**
 * @ngdoc function
 * @name angularWebappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWebappApp
 */
angular.module('shopApp.controller')
.controller('MainCtrl', function ($scope,dataService,swipeData) {

  $scope.users = dataService.getData();

  $scope.click = "点击进入列表页";

  $scope.swipes = swipeData;

  $scope.$on("ReachBottom",function(){


    console.log("ReachBottom--到达底部...");

  });

  $scope.deleteBanner = function(index){

    $scope.swipes.splice(index,1);

  }



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
