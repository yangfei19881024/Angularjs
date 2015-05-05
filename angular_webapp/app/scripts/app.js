'use strict';

/**
 * @ngdoc overview
 * @name angularWebappApp
 * @description
 * # angularWebappApp
 *
 * Main module of the application.
 */
/*angular
  .module('myApp', [
    'ui.router',
  ])
  .config(["$urlRouterProvider","$stateProvider",function($urlRouterProvider,$stateProvider){
        $urlRouterProvider.otherwise("/");
        $stateProvider
          .state("home",{
            url:"/home",
            templateUrl:"views/main.html"
          })
          .state("about",{
            url:"/about",
            templateUrl:"views/about.html",
            controller:"mainController",
            resolve:{
              friends:function($http){
                  return $http.get("/api/friends.json").then(function(response){
                    return response.data;
                  })
              }
            }
          })
          .state("product",{
            url:"/product",
            templateUrl:"views/product.html"
          })
  }]);
*/
var example = angular.module("myApp",[]);
example.controller("dataList",["$scope",function($scope){

    $scope.users = [
      {
        name:"yangfei",
      },
      {
        name:"tomcat",
      },
      {
        name:"andy",
      }
    ];

    $scope.addUser = function(){
      $scope.users.push({name:$scope.username});
      $scope.username = "";
    }

}])

