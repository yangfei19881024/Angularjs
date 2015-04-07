var myModule = angular.module("myModule",[]);

myModule.controller("myController",["$scope",function($scope){

	$scope.name = "yangfei";

	$scope.chk = true;
	$scope.$watch('blue', function(newVal, oldVal) {
		console.log('blue', newVal, oldVal);
	})
	$scope.$watch('red', function(newVal, oldVal) {
		console.log('red', newVal, oldVal);
	})

}]);
