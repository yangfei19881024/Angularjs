var module = angular.module("module",['dataServices','directives']);



module.controller("ctrl",["$scope","dataFac",function($scope,dataFac){

	$scope.cols = dataFac;

	console.log($scope.cols);

}]);


