var ctrlModule = angular.module("ctrlModule",[]);

ctrlModule.controller("listController",function($scope,dataService){

	var promise = dataService.loadData();

	promise.then(function(data){
		$scope.names = data;
	},function(){
		//error
	});

	console.log($scope.names)

});

ctrlModule.controller("detailController",function($scope,$routeParams,dataService){
	
	// var index = $routeParams.id;
	// $scope.detail = $scope

	var promise = dataService.loadData();

	promise.then(function(data){
		$scope.names = data;
	},function(){
		//error
	})

	// var index = $routeParams.id;
	// $scope.detail = $scope.names.index(index);

	console.log($scope.names);
	

});