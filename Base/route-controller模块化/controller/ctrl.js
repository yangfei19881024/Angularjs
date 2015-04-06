var ctrlModule = angular.module("ctrlModule",[]);

ctrlModule.controller("listController",function($scope,dataService){

	dataService.loadData()
		.success(function(data){
			$scope.names = data;
		});

});

ctrlModule.controller("detailController",function($scope,$routeParams){
	console.log($routeParams);
});