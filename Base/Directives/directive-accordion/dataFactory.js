var dataService = angular.module("dataServices",[]);

dataService.factory("dataFac",function(){

	var data = null;

	data = [
		{
			title:"第一个标题",
			content:"第一行内容",
		},
		{
			title:"第二个标题",
			content:"第二行内容",
		},
		{
			title:"第三个标题",
			content:"第三行内容",
		}
	];

	return data;

});
