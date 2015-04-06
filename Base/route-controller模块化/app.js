var module = angular.module("myModule",['ngRoute','serviceModel','ctrlModule']);

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

