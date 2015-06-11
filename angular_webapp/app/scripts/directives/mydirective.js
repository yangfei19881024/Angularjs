var dir = angular.module("myApp");

dir.directive("myDirective",function(){
  return {
    restrict:"AE",
    template:'<a href="javascript:;" ng-class="{active:on}" ng-click="toggle()">Click Me</a>',
    link:function(scope,element,attr){
      scope.on = false;
      scope.toggle = function(){
        scope.on = !scope.on;
      }
    }
  }
})
