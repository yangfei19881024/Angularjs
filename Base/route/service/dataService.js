var serviceModel = angular.module("serviceModel",[]);

serviceModel.service("dataService",function($http){
	
	return {
		loadData:function(parm){
			return $http({
				method:"post",
				url:"./data.json"
			});
		}
	}

});