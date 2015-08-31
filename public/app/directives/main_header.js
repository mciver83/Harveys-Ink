var app = angular.module('harveysInk');

app.directive('mainHeader', function(){
	return {
		restrict: 'E',
		templateUrl: 'app/views/mainHeader.html',
		transclude: true,
		link: function(scope, element, attrs, $document){
			$document.on('scrolldown', function(){
				element.addClass('background-white')
			})
		},
		controller: function($scope){
			$scope.navbarItems = [
				{
					name: 'WHO WE ARE',
					hash: '#/#about'
				},
				{
					name: 'HOW WE WORK',
					hash: '#/#skills'
				},
				{
					name: 'PORTFOLIO',
					hash: '#/#portfolio'
				},
				{
					name: 'PRICING',
					hash: '#/#contact'
				},
				{
					name: 'PRF',
					hash: '#/#contact'
				},
				{
					name: 'BLOG',
					hash: '#/#contact'
				},
				{
					name: 'CONTACT',
					hash: '#/#contact'
				}
			]
		}
	}
})