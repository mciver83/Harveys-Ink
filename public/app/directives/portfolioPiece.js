var app = angular.module('harveysInk');

app.directive('portfolioPiece', function(){
	return {
		restrict: 'E',
		templateUrl: 'public/app/views/portfolioPiece.html',
		transclude: true,
		link: function (scope, element, attrs) {
		},
        controller: function ($scope) {
            $scope.active = {}
            if ($scope.project.images) {
                $scope.active.image = $scope.project.images[0];
            }
        }
	}
})