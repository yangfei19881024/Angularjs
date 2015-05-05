var myModule = angular.module("myModule",[]);

myModule.directive("myWidget",function(){
	return{
		restrict:"AE",
		link:function(scope,element,attrs){

			// $(".box").text("hellow");
			
			element.on("click",function(){
				alert("asdf");
			});

		}
	}
});

myModule.controller("myApp",["$scope",function($scope){
	$scope.title = "myTitle";
	$scope.arr = [1,2,3,4,5];

}]);
