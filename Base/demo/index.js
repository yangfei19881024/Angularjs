var myModule = angular.module("myModule",['pasvaz.bindonce','ui.router']);

myModule.config(["$urlRouterProvider","$stateProvider","$locationProvider",function($urlRouterProvider,$stateProvider,$locationProvider){
	$urlRouterProvider.otherwise("/");

	$locationProvider.html5Mode({enabled:true,requireBase:false});

	$stateProvider
		.state("home",{
			url:"/",
			templateUrl:"templates/index.html",
			controller:"indexController"
		})
		.state("about",{
			url:"/about/a/:age/n/:name",
			templateUrl:"templates/about.html",
			controller:"aboutController"
		})
}])

myModule.controller("myController",["$scope",function($scope){

	$scope.Persons = [
		{
			id:"1",
			imageUrl:'http://lady.shangdu.com/d/file/entertainment/star/star_television/2015-08-20/729278ed29ee35d5d78fafb534752bf8.jpg',
			name:"yangfei"
		},
		{
			id:"2",
			imageUrl:'http://lady.shangdu.com/d/file/entertainment/star/star_television/2015-08-20/729278ed29ee35d5d78fafb534752bf8.jpg',
			name:"tomcat"
		},
		{
			id:"3",
			imageUrl:'http://lady.shangdu.com/d/file/entertainment/star/star_television/2015-08-20/729278ed29ee35d5d78fafb534752bf8.jpg',
			name:"gaoya"
		},
		{
			id:"4",
			imageUrl:'http://lady.shangdu.com/d/file/entertainment/star/star_television/2015-08-20/729278ed29ee35d5d78fafb534752bf8.jpg',
			name:"jackson"
		}

	];

	console.log($scope);

}]);
