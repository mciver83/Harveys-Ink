var app = angular.module('harveysInk');

app.factory('portfolioService', function ($http, $q) {
    var service = {}
	var addProject = function(project){
		return $http({
			method: 'POST',
			url: '/api/portfolio/projects/new',
			data: project
		})
	}
    
    var getProjects = function () {
        return $http({
            method: 'GET',
            url: '/api/portfolio/projects'
        })
    }
    
    service.addProject = addProject;
    service.getProjects = getProjects;
    return service;
})