angular.module("shopApp.controller")
  .controller("index",function($scope,$window){

   $scope.users = [
      {
        name:"yangfei",
        age:14
      },
      {
        name:"tomcat",
        age:16
      },
      {
        name:"gaoya",
        age:17
      },
      {
        name:"gaoya2",
        age:17
      },
      {
        name:"gaoya3",
        age:17
      },
      {
        name:"gaoya4",
        age:17
      }
      ,{
        name:"gaoya5",
        age:17
      }
      ,{
        name:"gaoya6",
        age:17
      },
      {
        name:"gaoya7",
        age:17
      },
      {
        name:"gaoya8",
        age:17
      }
    ];

    angular.element($window).bind("scroll", function(e) {
       $scope.visible = false;
   })

  });
