var app = angular.module('harveysInk');

app.factory('contentService', function ($http, $q) {
    var service = {}
	service.addContent = function(data){
		return $http({
			method: 'POST',
			url: '/api/content',
			data: data
		})
	}
    
    service.getContent = function () {
        return $http({
            method: 'GET',
            url: '/api/content'
        })
    }
    
    service.editContent = function (data) {
        return $http({
            method: 'PUT',
            url: '/api/content', 
            data: data
        })
    }
    
    return service;
})