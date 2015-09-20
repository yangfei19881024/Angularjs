angular.module("AboutModule",[])
  .controller("aboutController",function($scope,$stateParams){
    $scope.about = "about page";
    $scope.people = {
      age:$stateParams.age,
      name:$stateParams.name
    }
  });
