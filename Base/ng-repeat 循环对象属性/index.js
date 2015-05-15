angular.module("myModule",[])
.controller("MyController",function($scope){

	$scope.obj = {
	    a: 1,
	    b: 2,
	    c: 3
	};

	

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
