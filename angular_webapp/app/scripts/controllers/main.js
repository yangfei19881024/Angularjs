'use strict';

/**
 * @ngdoc function
 * @name angularWebappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWebappApp
 */
angular.module('mytodoApp')
.controller('MainCtrl', function ($scope, localStorageService) {

  var todosInStore = localStorageService.get('todos');

  $scope.todos = todosInStore && todosInStore.split('\n') || [];

  $scope.$watch('todos', function () {
    console.log("change!");
    localStorageService.add('todos', $scope.todos.join('\n'));
  }, true);

  $scope.addTodo = function () {
    $scope.todos.push($scope.todo);
    $scope.todo = '';
  };

  $scope.removeTodo = function (index) {
    $scope.todos.splice(index, 1);
  };

  $scope.addLocalStorage = function(){

    var obj = [
      {name:"yangfei",age:23},
      {name:"tomcat",age:24}
    ];

    var obj_str = JSON.stringify(obj);

    localStorageService.add("obj_val",obj_str);

  }

  $scope.getLocalStorage = function(){

    var obj = localStorageService.get("obj_val");

    console.log(obj);

  }
})

.filter("greet", function () {
      return function(name) {
          return "Hello " + name + " !";
      }
  });
