angular.module("shopApp.controller")
  .controller("index",function($scope){

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
      }
    ];

    $scope.name = "angular";

    var arr = _.first([1, 2, 3]);

    console.log(arr);

  });
