var module = angular.module("myModule",['ngRoute']);

module.controller("MyCntrl",["$scope",function($scope){

	$scope.arr = [1, 2, 3];

	var values = {name: 'misko', gender: 'male'};

	angular.forEach(values,function(value,key){

			console.log("value:"+value+"key:"+key);
	})

}]);
