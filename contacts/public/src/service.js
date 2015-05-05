angular.module("contactApp",[])
	.factory("pullData",function(){
		var data = [
			{
				"name":"yangfei",
				"age":12
			},
			{
				"name":"tomcat",
				"age":22
			}
		];
		return data;
	});