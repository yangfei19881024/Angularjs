var module = angular.module("myModule",['ngRoute']);

module.controller("listController",function($scope,$q){

	var defer = $q.defer();

	$scope.getName = function(name){

		if( name == "yang" ){
			defer.resolve(name+" pass");
		}else{
			defer.reject("deny");
		}

		return defer.promise;
	}
	

	$scope.getName("yang")
		.then(function(name){
			alert(name);
		},function(){	
			alert("reject");
		})
		.then(function(){
			alert("ok pass");
		})

});
