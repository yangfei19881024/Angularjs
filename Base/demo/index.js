var module = angular.module("myModule",['ngRoute']);

module.controller("MyCntrl",["$scope","$interval",function($scope,$interval){

	$scope.arr = [1, 2, 3];
	
	var values = {name: 'misko', gender: 'male'};

	angular.forEach(values,function(value,key){

			console.log("value:"+value+"key:"+key);
	});

	$scope.clock = new Date();

  var updateClock = function() {
    $scope.clock = new Date();
	};

	$interval(updateClock,1000);

	updateClock();

}]);
