angular.module("shopApp.config")

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
    .state("list",{
      url:"/list/:serviceId/t/:typeId/a/:areaId/o/:orderId?cityid",
      controller:"list",
      templateUrl:"views/list.html"
    })

}])
