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
var example = angular.module("myApp", ['ui.router']);
example.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("route1",{
        url:"/route1",
        templateUrl:"views/route1.html"
      })
      .state("route2",{
        url:"/route2",
        templateUrl:"views/route2.html",
      })
      .state("route1.list1",{
        url:"list1",
        templateUrl:"views/list1.html",
        controller:function($scope){
            $scope.items = ["A", "List", "Of", "Items"];
        }
      })
      .state("route2.list2",{
        url:"list1",
        templateUrl:"views/list2.html",
        controller:function($scope){
            $scope.things = ["B", "List", "Of", "Items"];
        }

      })

    $urlRouterProvider.otherwise('route1');
});


