var myModule = angular.module("myModule",[]);

myModule.controller("myController",["$scope",function($scope){
	var model = {
        user: "Adam",
        items: [{ action: "Buy Flowers", done: false },
	            { action: "Get Shoes", done: false },
	            { action: "Collect Tickets", done: true },
	            { action: "Call Joe", done: false }],
		};

	$scope.lists = model.items;

}]);

myModule.filter("limits",function(){
	return function(item,param1,param2){
		return item.substr(0,param2);
	}
})