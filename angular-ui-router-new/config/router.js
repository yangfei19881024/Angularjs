angular.module("Admin")
.config([
	'$locationProvider',
	function($locationProvider){
		$locationProvider.html5Mode({enabled:true,requireBase:false})
		
	}
]).
config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise("/");

		$stateProvider
		.state("/",{
			url:'/home',
			templateUrl:"./templates/home.html",
			controller:'HomeController'
		})
	}
])