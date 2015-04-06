var myModule = angular.module("myModule",[]);

myModule.controller("myController",["$scope","$timeout",function($scope,$timeout){
	$scope.username = "yang";
	$scope.$watch("username",function(newVal,oldVal){

		if($timeout){
			$timeout.cancel();
		}

			$timeout(function(){
				console.log(newVal)
			},1000)

	});

}]);