var myModule = angular.module("myModule",[]);

myModule.controller("AppController",function($scope){

  $scope.addUser = function(){

    console.log($scope.user);
    // $scope.users.push($scope.user);

  }

  $scope.editUser = function(index){
    $scope.user = $scope.users[index];

  }

  $scope.users = [
    {
      id:1,
      name:"yang",
      age:10
    },
    {
      id:2,
      name:"fei",
      age:11
    },
    {
      id:3,
      name:"jack",
      age:12
    }
  ]
});



myModule.directive('resize', function ($window) {
    return function (scope, element) {
        var w = angular.element($window);
        scope.getWindowDimensions = function () {
            return {
                'h': w.height(),
                'w': w.width()
            };
        };
        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
            scope.windowHeight = newValue.h;
            scope.windowWidth = newValue.w;

            scope.style = function () {
                return {
                    'height': (newValue.h - 100) + 'px',
                        'width': (newValue.w - 100) + 'px'
                };
            };

        }, true);

        w.bind('resize', function () {
            scope.$apply();
        });
    }
})
