var directiveModule = angular.module("webapp.directives",[]);

directiveModule.directive("outerSpace",function(){

	return{
		restrict:"AE",
		template:'<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true" ng-transclude></div>',
		transclude:true,
		controller:function($scope){
			/**
			*这里注意了 要用this
			**/
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

	/**
	* @单向绑定父级scope 元素，在指令属性上写上 表达式{{scope.XX}}
	* = 与父级scope 双向绑定
	* & 绑定父级scope 函数
	*/

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
