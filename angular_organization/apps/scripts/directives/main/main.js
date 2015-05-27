angular.module("shopApp.directive")
  .directive("helloWorld",function(){
    return {
      restrict:"AE",
      template:"<div><input name='user' data-ng-model='username' /><p>{{username}}</p></div>",
      link:function(scope,ielement,iattr){
          ielement.click(function(){
            alert("inner input");
          })
      }
    }
  })
