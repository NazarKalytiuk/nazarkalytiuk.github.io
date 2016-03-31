"use scrict";

var portfolio = angular.module('portfolio', []);

portfolio.controller('ListProjectCtrl', function($scope, $http) {
	$http.get('projects.json').success(function (data) {
		$scope.projects = data;
		$scope.projects[0].url = "22";
		$http({
			method: 'POST',
			url: '',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json' 
			},
			data: $scope.projects
		})
	});
})