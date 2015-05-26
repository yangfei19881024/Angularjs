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
	var url = "";

	$http.get("http://shopapi.boqii.com/mobile.getprolist-2033,3099,813,2329,1253,9759,1669,1668,742,485,809,741,487,810,497,139,2849,3100,2328,739,186,1717.html?AppVersion=1.6&UDID=")
		 .success(function(data){
		 	console.log(data);
		 })
		 .error(function(err){
		 	console.log(err);
		 })

}]);
