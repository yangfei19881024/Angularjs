angular.module('shopApp.config',[]);
angular.module('shopApp.controller',[]);
angular.module('shopApp.directive',[]);
angular.module('shopApp.filter',[]);

angular.module('shopApp', [
  'ui.router',
  'shopApp.controller',
  'shopApp.directive',
<<<<<<< HEAD
  'pasvaz.bindonce'
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
    .state("list",{
      url:"/list",
      controller:"list",
      templateUrl:"views/list.html"
    })

}])
=======
  'shopApp.filter',
  'shopApp.config'
])
>>>>>>> route_branch
