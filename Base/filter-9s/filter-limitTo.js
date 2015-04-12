var myModule = angular.module("myModule",[]);

myModule.controller("myController",["$scope",function($scope){

	$scope.name = "中华人KG民共和国";

}]);

myModule.filter("limits",function(){
	return function(item,param1,param2){
		return item.substr(0,param2);
	}
})