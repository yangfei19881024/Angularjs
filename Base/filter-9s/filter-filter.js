var myModule = angular.module("myModule",[]);

myModule.controller("myController",["$scope",function($scope){

	$scope.a = "a";

	$scope.childrenArray = [
	    {name:'kimi4',age:3},
	    {name:'cindy',age:4},
	    {name:'anglar',age:4},
	    {name:'shitou',age:6},
	    {name:'tiantian',age:5}
	];

	$scope.func = function(data){
		return data.age >= 4;
	}

}]);

myModule.filter("limits",function(){
	return function(item,param1,param2){
		return item.substr(0,param2);
	}
})