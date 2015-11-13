angular.module('harveysInk')

.filter('unsafe', function($sce) { 
	return $sce.trustAsHtml; 
});