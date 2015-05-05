var module = angular.module("module",['dataServices','webapp.directives']);



module.controller("ctrl",["$scope","dataFac",function($scope,dataFac){

	$scope.cols = dataFac;

	console.log($scope.cols);

}]);


