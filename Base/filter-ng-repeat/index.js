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

myModule.filter("filterItem",function(){
	return function(items,param1){
		var result = [];

		angular.forEach(items,function(item){
			if( item.action.length > 9 ){
				result.push(item);
			}
		})
		return result;
	}
})