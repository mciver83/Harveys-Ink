var app = angular.module('harveysInk');

app.service('portfolioService', function ($http, $q) {
	this.addProject = function(project){
		return $http({
			method: 'POST',
			url: '/api/portfolio/project',
			data: project
		})
	}
})