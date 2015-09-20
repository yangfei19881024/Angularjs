var myModule = angular.module("myModule",[]);

myModule.controller("myController",["$scope","$interval",function($scope,$interval){

	// $scope.names = ["yangfei","gaoya",'jackson',"tom"];
	//
	// $scope.removeName = function(index){
	// 	// alert(name);
	// 	// var index = $scope.names.index(name);
	// 	$scope.names.splice(index,1);
	//
	// }
	//
	// $scope.addName = function(){
	// 	$scope.names.push($scope.new_name);
	// }
	//
	// $scope.age = 12;
	//
	// $scope.getName = function(){
	// 	return $scope.age;
	// }


	$scope.peoples = [
		{
			name:"review draft",
			description:"Re-read and review the 1st draft one",
			priority:4,
			estimation:5,
			done:false
		},
		{
			name:"Incorporate remarks",
			description:"Re-read and review the 1st draft two",
			priority:10,
			estimation:5,
			done:false
		},
		{
			name:"jaskson is coming",
			description:"Re-read and review the 1st draft three",
			priority:8,
			estimation:5,
			done:true
		}
	];

	$scope.totalpriority = function(){
		var total = 0;
		angular.forEach($scope.peoples,function(item){

			total+=item.priority;

		});

		return total;

	}

	$scope.del = function(index){
		$scope.peoples.splice(index,1);
	}



	console.log($scope);


}]);
