var myModule = angular.module("myModule",[]);

myModule.factory("dataFactory",function ($http) {
	var doRequest = function (pathname) {
		return $http({
					method:"post",
					url:'data.json'
				}); 
	}

	return {
		loadData:function(){
			return doRequest();
		}
	}

	//--------method 02------
	// return $http({
	// 	method:"post",
	// 	url:"data.json"
	// });


});

myModule.controller("myController",["$scope","$http","dataFactory",function($scope,$http,dataFactory){

	// $scope.names = dataFactory;
	// console.log(dataFactory);return;
	dataFactory.loadData('ss').success(function(data){
		$scope.names = data;
	})
	$scope.removeName = function(index){
		// alert(name);
		// var index = $scope.names.index(name);
		$scope.names.splice(index,1);
	}

	$scope.addName = function(){
		$scope.names.push($scope.new_name);
	}

}]);