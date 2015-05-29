angular.module("shopApp.controller")
  .controller("list",function($scope,$stateParams){


    $scope.users = [

      {name:"yangfei",age:12},
      {name:"gaoya",age:12},
      {name:"tomcat",age:12},
      {name:"andyliu",age:12},
      {name:"tack",age:12},

    ];

    alert( $stateParams.serviceId )

  })
