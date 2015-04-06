var serviceModel = angular.module("serviceModel",[]);

serviceModel.service("dataService",function($http,$q){
	
	return {
		loadData:function(parm){
			
			var defered = $q.defer();
			$http({
				method:"post",
				url:"./data.json"
			}).
			success(function(data){
				defered.resolve(data);
			}).
			error(function(data){
				defered.reject(data);
			});

			return defered.promise;

		}
	}

});