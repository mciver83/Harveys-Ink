var app = angular.module('harveysInk');

app.directive('portfolioPiece', function(){
	return {
		restrict: 'E',
		templateUrl: 'app/views/portfolioPiece.html',
		transclude: true,
		link: function(scope, element, attrs, $document){
			$document.on('scrolldown', function(){
				element.addClass('background-white')
			})
		},
	}
})