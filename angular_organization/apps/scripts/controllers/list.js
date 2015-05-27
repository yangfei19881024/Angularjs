angular.module("shopApp.controller")
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
