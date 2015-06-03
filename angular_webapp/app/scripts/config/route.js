angular.module('shopApp')
  .config(function($locationProvider){
    $locationProvider.html5Mode({enabled:true,requireBase:false});
  })
  .config(function($stateProvider,$urlRouterProvider){
      $urlRouterProvider.otherwise("/");

      $stateProvider
        .state("/",{
          url:"/",
          templateUrl:"/views/main.html",
          controller:"MainCtrl"
        })
        .state("list",{
          url:"/list",
          templateUrl:"/views/list.html",
          controller:"listController"
        })
        .state("list.son",{
          url:'/list.son/p1/:params1/p2/:params2/p3/:params3',
          template:"<h1>子路由内容 {{name}}</h1>",
          controller:"sonController"
        })
  });
