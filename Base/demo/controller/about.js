angular.module("Boqii.Module")
  .controller("aboutController",function($scope,$stateParams,People){
    $scope.about = "about page";
    console.log("people lists");

    console.log(People);
  });
