var myModule = angular.module("myModule",[]);

myModule.controller("myController",["$scope",function($scope){

	$scope.arr = [1];


	$scope.$watch("arr",function(newValue,oldValue){

		console.log("has Changed:"+newValue.join(","));

	});


	$scope.change = function(){

		$scope.arr = [1,3,2]

	}

	$scope.users = [
		{
			id:1,
			name:"yang",
			age:12
		},
		{
			id:2,
			name:"fei",
			age:13
		},
		{
			id:3,
			name:"tom",
			age:14
		},
		{
			id:4,
			name:"jack",
			age:15
		}
	]

	$scope.delete = function(index){
		$scope.users.splice(index,1);
	}

	// $scope.update = function(index){
	// 	var user = $scope.users[index];
	//
	// 	$scope.user = user;
	//
	// }

	$scope.use = $scope.users[2];


}]);
