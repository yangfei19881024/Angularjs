var myModule = angular.module("myModule",[]);

myModule.controller("myApp",["$scope","$window",function($scope,$window){
	$scope.username = "yang";

	$scope.greeting = function(){
		console.log($window);
		alert( $scope.username );

	}

}]);
