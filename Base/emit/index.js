// angular.element(document).ready(function(){
//
// 	angular.bootstrap(doucment.getElementById("myapp"),['myModule']);
//
// });
//
// angular.element(document).ready(function() {
//     angular.bootstrap(document.getElementById("myapp"), ["myModule"]);
// });

var myModule = angular.module("myModule",[]);

myModule.controller("myApp",function($scope){

	$scope.user = {name:"yangfei"};

})
