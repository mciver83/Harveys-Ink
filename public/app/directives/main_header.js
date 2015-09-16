var app = angular.module('harveysInk');

app.directive('mainHeader', function($document){
	return {
		restrict: 'E',
		templateUrl: 'public/app/views/mainHeader.html',
		link: function(scope, element, attrs){
            console.log(element.find('i')[0], element.find('#navbar-wrapper')[0]);
			var menu = element.find('i')[0];
            var navbarWrapper = element.find('#navbar-wrapper')[0];
            $(navbarWrapper).on('click', function () {
                scope.show = !scope.show;
                scope.$apply();
            })
            $(menu).on('click', function () {
                scope.show = !scope.show;
                scope.$apply();
                console.log('clicked', scope.show)
            })
		},
		controller: function($scope, $location){
            $scope.show;
            $scope.locationHash = '#' + $location.path()
			$scope.navbarItems = [
				{
					name: 'WHO WE ARE',
					hash: '#/who/'
				},
				{
					name: 'HOW WE WORK',
					hash: '#/how/'
				},
				{
					name: 'PORTFOLIO',
					hash: '#/home/'
				},
				{
					name: 'PRICING',
					hash: '#/pricing/'
				},
				{
					name: 'PRF',
					hash: '#/prf/'
				},
				{
					name: 'BLOG',
					hash: '#/blog/'
				},
				{
					name: 'CONTACT',
					hash: '#/contact/'
				}
			]
		}
	}
})