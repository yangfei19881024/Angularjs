angular.module('shopApp.config',[]);
angular.module('shopApp.controller',[]);
angular.module('shopApp.directive',[]);
angular.module('shopApp.filter',[]);

angular.module('shopApp', [
  'ui.router',
  'shopApp.controller',
  'shopApp.directive',
  'shopApp.filter',
  'shopApp.config'
])
