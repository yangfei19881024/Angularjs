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
          value.isSelected = false;
        })
      }else{
        angular.forEach($scope.craws,function(value,key){
          value.isSelected = true;
        })

      }

    }

  });
