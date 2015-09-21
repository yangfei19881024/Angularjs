angular.module("Boqii.Module")
  .controller("aboutController",function($scope,$stateParams,People){
    $scope.about = "about page";
    alert($stateParams.age)
  });
