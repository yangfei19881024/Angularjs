angular.module("Boqii.Module")
  .controller("indexController",function($scope,People){

    $scope.name = "yangfei";

    $scope.items = ["item1","item2","item3"];

    $scope.craws = [
      {
        name:"yang",
        isSelected:true
      },
      {
        name:"tom",
        isSelected:false
      },
      {
        name:"jack",
        isSelected:true
      },
    ];


    $scope.checkAllFun = function(){
      if( $scope.checkAll ){
        angular.forEach($scope.craws,function(value,key){
          value.isSelected = true;
        })
      }else{
        angular.forEach($scope.craws,function(value,key){
          value.isSelected = false;
        })

      }

    }

    $scope.dirname = "directive_names";

    $scope.sayName = function(){
      alert("sayName");
    }

    //ng-class


  })
  .directive("welcome",function(){

    return {
      restrict: "E",
      controller: function($scope) {
        $scope.words = [];

        $scope.sayHello = function() {
          $scope.words.push("hello");
        };

        $scope.sayHowdy = function() {
          $scope.words.push("howdy");
        };

        $scope.sayHi = function() {
          $scope.words.push("hi");
        };
      },

      controllerAs:"wCtrl",
      link: function(scope, element){
        element.bind("mouseenter", function() {
          console.log(scope.words);
        });
      }
    }

  })

  .directive("hello", function() {
    return {
      require: "welcome",
      link: function (scope, element, attrs, wCtrl) {
        scope.sayHello();
      }
    };
 })
 .directive("howdy",function(){
   return{
     require:"welcome",
     link:function(scope,element,attrs,wCtrl){
       scope.sayHowdy();
     }
   };
 })
