var directiveModule = angular.module("directives",[]);

directiveModule.directive("outerSpace",function(){

	return{
		restrict:"AE",
		template:'<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true" ng-transclude></div>',
		transclude:true,
		controller:function($scope){
			this.groups = [];
			this.justfiy = function(nowscope){
				this.groups.forEach(function(item_scope){
					if( item_scope !== nowscope ){
						item_scope.isOpen = false;
					}
				})
			}
		}
	}

});

directiveModule.directive("innerSpace",function(){

	return{
		restrict:"AE",
		templateUrl:"tpls/inner.html",
		transclude:true,
		scope:{
			title:"@"
		},
		require:"^outerSpace",
		link:function(scope,element,attr,parentController){
			scope.isOpen = false;
			scope.collspace = function(){
				scope.isOpen = !scope.isOpen;
				parentController.justfiy(scope);
			};
			parentController.groups.push(scope);

		}
	}

});
