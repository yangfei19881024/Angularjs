angular.module("Boqii.Module")
  .directive("iscroll",function(){
    return{
      restrict:"EACM",
      link:function(scope,element,attrs){

        var myScroll = new IScroll(element[0], {
            mouseWheel: true,
            scrollbars: false
        });

      }
    }
  })
