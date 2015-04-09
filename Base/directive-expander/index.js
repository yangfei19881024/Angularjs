var myModule = angular.module("myModule",[]);

myModule.controller("myController",["$scope",function($scope){

	$scope.expandertitle = "标题";
	$scope.content = "内容";

	console.log($scope);
}]);


myModule.controller("testController",["$socpe","$http",function($scope,$http){



}]);

myModule.directive("expander",function(){

	return {
		restrict:'EACM',
		templateUrl:"expanderTmp.html",
		transclude:true,
		scope:{
			title:"=expanderTitle"
		},
		link:function(scope,elem,attr){
			console.log(scope);

			scope.show=false;
			scope.expand = function(){
				scope.show = !scope.show;
			}
		}
	}

});
