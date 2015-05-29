angular.module("shopApp.controller")
  .controller("list",function($scope,$stateParams,$state){


    $scope.users = [

      {name:"yangfei",age:12},
      {name:"gaoya",age:12},
      {name:"tomcat",age:12},
      {name:"andyliu",age:12},
      {name:"tack",age:12},

    ];

    $scope.goHome = function(){
      /**
      $state.go(param)
      参数是 state状态的值
      **/

      $state.go('home');
    }

  })
