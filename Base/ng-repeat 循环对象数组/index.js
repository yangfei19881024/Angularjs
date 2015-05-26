angular.module("myModule",[])
.controller("MyController",function($scope){

	$scope.users = [
		{name:"yangfei",age:14},
		{name:"tomcat",age:15}
	]

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
