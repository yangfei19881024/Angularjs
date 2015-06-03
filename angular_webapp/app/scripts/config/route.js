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
  });
