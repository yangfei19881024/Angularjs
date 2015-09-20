angular.module("shopApp.controller")
<<<<<<< HEAD
  .controller("list",["$scope",function($scope){

    $scope.users = [
       {
         name:"yangfei",
         age:14
       },
       {
         name:"tomcat",
         age:16
       },
       {
         name:"gaoya",
         age:17
       }
     ];

     $scope.removeItem = function(index){

       $scope.users.splice(index,1);

     }

  }]);
=======
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
>>>>>>> route_branch
