"use scrict";

var portfolio = angular.module('itemList', []);

portfolio.controller('ListItemCtrl', function($scope) {
	$scope.listName = "list name";
	$scope.list = [
	{
		'name': 'salt',
		'check': true
	},
	{
		'name': 'bread',
		'check': false
	},
	{
		'name': 'meat',
		'check': true
	},
	]
	$scope.removeItem = function(item){
		var index = $scope.list.indexOf(item);
		$scope.list.splice(index, 1); 
	}
})