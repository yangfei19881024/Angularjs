var module = angular.module("myModule",['ngRoute','serviceModel']);

module.config(function($routeProvider,$locationProvider){

	$routeProvider.
		when("/",{
			templateUrl:"tpl/list.html",
			controller:"listController"
		}).
		when("/detail/:id",{
			templateUrl:"tpl/detail.html",
			controller:"detailController"
		}).
		otherwise("/");

		// $locationProvider.html5Mode(true);
});

module.controller("listController",function($scope,dataService){

	dataService.loadData()
		.success(function(data){
			$scope.names = data;
		});

});

module.controller("detailController",function($scope,$routeParams){
	console.log($routeParams);
});