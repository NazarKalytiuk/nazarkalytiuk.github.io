// Angular module for the application
var app = angular.module('app', [
  'ngRoute',
  'LocalStorageModule',
  'ngMaterial',
   'angular-loading-bar'
]);

app.run([
  '$rootScope', '$location', function($rootScope, $location) {
    $rootScope.defaultApiPath = 'http://localhost:1488';

    $rootScope.test = "Just for test";
    //$location.path('/home');
    console.log($rootScope.test);
  }
]).config(['$compileProvider', function ($compileProvider) {
  $compileProvider.debugInfoEnabled(false);
}]);
