app.controller('ProductController',
['$scope', function ($scope) {

  $scope.product = 'KYRVA PRODUCT';
  $scope.getArray = function(num) {
  	return new Array(num);
  }
}]);