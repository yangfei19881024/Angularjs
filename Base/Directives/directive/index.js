var myModule = angular.module("myModule",[]);

myModule.controller("myController",["$scope","$timeout",function($scope,$timeout){

	$scope.names = ["yangfei","gaoya",'jackson',"tom"];

}]);

myModule.directive("helloWorld",function(){

	return {
		scope:{
			//与父级 双向绑定
			list:'='
		},
		controller:function($scope){
			$scope.names = $scope.list;
		},
		restrict:"EACM",
		template:"<ul><li ng-repeat='name in names'>{{name}}</li></ul>",
		replace:true,
		transclude:true,
		link:function(scope,ele,attr){
			//想点击 每一个li 就会触发反应
			ele.on('click',"li",function(){
				alert( $(this).text() )
			})
		}
	}

});	