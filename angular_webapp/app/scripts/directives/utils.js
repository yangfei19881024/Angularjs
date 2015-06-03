angular.module("shopApp")

  .directive("scrollToBottom",function($window,$document){
    return {
      restrict:"AE",
      template:"<h1>directive containers</h1>",
      link:function(scope,element,attr){

        var _window = angular.element($window);
        var _document = angular.element($document);

        _window.on("scroll",function(){

            if( _window.height() + _window.scrollTop() > _document.height() - 30 ){
              console.log("到底部了");
            }

        })


      }
    }
  })
