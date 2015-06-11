angular.module("shopApp.controller")


  .controller("index",function($scope,$filter){

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

    // lodash test
    var arr = _.first([1, 2, 3]);

    console.log(arr);
    $scope.originalText = 'hello';

    $scope.message = $filter("lowercase")("TOM");

  });
