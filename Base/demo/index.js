var module = angular.module("myModule",['ngRoute']);

module.controller("listController",["$scope",function($scope){

		$scope.clock = {
			now:new Date()
		};

		var update = function(){
			$scope.clock.now = new Date();
		}

		setInterval(function(){
			$scope.$apply(update);
		},1000);


		update();

}]);
