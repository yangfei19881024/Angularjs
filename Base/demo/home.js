angular.module("Boqii.Module")
  .controller("indexController",function($scope,People){

    $scope.name = "yangfei";

    $scope.items = ["item1","item2","item3"];

    console.log(People);
  });
