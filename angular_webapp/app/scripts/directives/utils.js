angular.module("shopApp")

  .directive("scrollToBottom",function($window,$document){
    return {
      restrict:"AE",
      template:"<h1>directive containers</h1>",
      link:function(scope,element,attr){

        var _window = angular.element($window);
        var _document = angular.element($document);

        _window.scroll(function(){

            if( _window.height() + _window.scrollTop() > _document.height() - 30 ){

              scope.$root.$broadcast("ReachBottom");

            }

        })


      }
    }
  })

  .directive("swipe",function(){

    return {
      restrict:"AE",
      link:function(scope,element,attr){

        new Swipe(element[0], {
          startSlide: 2,
          speed: 400,
          auto: 3000,
          continuous: true,
          disableScroll: false,
          stopPropagation: false,
          callback: function(index, elem) {},
          transitionEnd: function(index, elem) {}
        });

      }
    }

  })
