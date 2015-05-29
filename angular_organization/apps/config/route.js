angular.module("shopApp.config")

.config(["$locationProvider",function($locationProvider){
  $locationProvider.html5Mode({ enabled: true, requireBase: false })
}])

.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){

  $urlRouterProvider.otherwise("/index");

  $stateProvider
    .state("index",{
      url:"/index",
      views:{
        '':{
          templateUrl:'views/index.html'
        },
        'sidebar@index':{
          templateUrl:'views/sidebar.html'
        },
        'content@index':{
          templateUrl:'views/index_content.html'
        }
      }
    })
    .state("list",{
      url:"/list/:serviceId/t/:typeId/a/:areaId/o/:orderId?cityid",
      controller:"list",
      templateUrl:"views/list.html"
    })
    .state('index.user',{
      url:'/user',
      templateUrl:'views/user_content.html'
    })
    .state('index.user.adduser',{
      url:'/adduser',
      templateUrl:'views/user_add.html'
    })

}])
