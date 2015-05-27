var myModule = angular.module("myModule",[]);

myModule.controller("myController",["$scope",function($scope){

	$scope.arr = [1];


	$scope.$watch("arr",function(newValue,oldValue){

		console.log("has Changed:"+newValue.join(","));

	});


	$scope.change = function(){

		$scope.arr = [1,3,2]

	}

}]);
