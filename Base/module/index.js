angular.module("myModule",[])
.controller("MyController",function($scope){

	$scope.tom = {
		sex:0,
		age:25,
		name:"yangfei"
	}

	$scope.arr3 = [
	    [11, 12, 13],
	    [21, 22, 23],
	    [31, 32, 33]
	];

})

.filter("formatSex",function(){
	return function(input,parme1,parme2){

		console.log(parme1)
		console.log(parme2)

		if( input == 1 ){
			return "男";
		}
		if(input == 0){
			return "女";
		}

	}
})
