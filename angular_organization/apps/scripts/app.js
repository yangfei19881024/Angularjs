angular.module('shopApp.controller',[]);

angular.module('shopApp', [
  'ui.router',
  'shopApp.controller'
  // 'shopApp.directive'
])
.config(["$locationProvider",function($locationProvider){
  $locationProvider.html5Mode({ enabled: true, requireBase: false })
}])
.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("home",{
      url:"/",
      controller:"index",
      templateUrl:"views/index.html",
    })

}])
