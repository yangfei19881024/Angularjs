var myModule = angular.module("myModule",[]);

myModule.controller("myController",["$scope","$window",function($scope,$window){
	$scope.username = "yang";


	var list = angular.element($window);
	
	console.log(list);
	console.log($(window))

	// $scope.$watch("username",function(newVal,oldVal){

	// 	if($timeout){
	// 		$timeout.cancel();
	// 	}

	// 		$timeout(function(){
	// 			console.log(newVal)
	// 		},1000)

	// });

}]);