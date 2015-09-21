var myModule = angular.module("Boqii.APP",['pasvaz.bindonce','ui.router','Boqii.Module']);
angular.module("Boqii.Module",[]);

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
