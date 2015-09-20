angular.module("shopApp.controller")
<<<<<<< HEAD
  .controller("index",function($scope,$window){
=======


  .controller("index",function($scope,$filter){
>>>>>>> route_branch

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

<<<<<<< HEAD
    $scope.name = "angular";

    // lodash test
    //var arr = _.first([1, 2, 3]);

<<<<<<< HEAD
    // console.log(arr);
=======
    angular.element($window).bind("scroll", function(e) {
       $scope.visible = false;
   })
>>>>>>> 2528723597be7a61d738f2350373fd6c4fdfa4a1
=======
    console.log(arr);
    $scope.originalText = 'hello';

    $scope.message = $filter("lowercase")("TOM");
>>>>>>> route_branch

  });
