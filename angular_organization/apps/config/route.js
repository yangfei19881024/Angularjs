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
          templateUrl:'views/index.html',
          controller:"index"
        },
        'sidebar@index':{
          templateUrl:'views/sidebar.html'
        },
        'content@index':{
          templateUrl:'views/index_content.html'
        }
      }
    })
    .state('index.user',{
      url:'/user',
      templateUrl:'views/user_content.html'
    })
    .state("index.product",{
      url:"/product",
      templateUrl:"views/product.html"
    })
    .state("index.about",{
      url:"/about",
      templateUrl:"views/about.html"
    })

}])
