angular.module("myApp")
	.controller("mainController",function($scope,friends){

		$scope.title = "hello world";
		$scope.items = ['home','about','product'];
		$scope.selectedValue = 'about';
		console.log(friends);
		$scope.friends = friends;

	});