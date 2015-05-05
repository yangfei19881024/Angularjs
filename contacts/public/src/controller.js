angular.module("contactsApp",[])
	.controller("listController",function($scope,pullData){
		alert("sss")
		$scope.name = "yangfei";
		$scope.contacts = pullData;
		console.log(pullData)
	})