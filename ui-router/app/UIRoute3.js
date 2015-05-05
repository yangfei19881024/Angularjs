var routerApp = angular.module('routerApp', ['ui.router']);
routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                '': {
                    templateUrl: 'tpls3/index.html'
                },
                'main@index': {
                    templateUrl: 'tpls3/home.html'
                }
            }
        })
        .state('usermng', {
            url: '/usermng',
            views: {
                '': {
                    templateUrl: 'tpls3/usermng.html',
                    controller: function($scope, $state) {
                        $scope.addUserType = function() {
                            $state.go("usermng.addusertype");
                        }
                    }
                }
            }
        })
        .state('usermng.highendusers', {
            url: '/highendusers',
            templateUrl: 'tpls3/highendusers.html'
        })
        .state('usermng.normalusers', {
            url: '/normalusers',
            templateUrl: 'tpls3/normalusers.html'
        })
        .state('usermng.lowusers', {
            url: '/lowusers',
            templateUrl: 'tpls3/lowusers.html'
        })
        .state('usermng.addusertype', {
            url: '/addusertype',
            templateUrl: 'tpls3/addusertypeform.html',
            controller: function($scope, $state) {
                $scope.backToPrevious = function() {
                    window.history.back();
                }
            }
        })
        .state('permission', {
            url: '/permission',
            template: '这里是权限管理'
        })
        .state('report', {
            url: '/report',
            template: '这里是报表管理'
        })
        .state('settings', {
            url: '/settings',
            template: '这里是系统设置'
        })
});
