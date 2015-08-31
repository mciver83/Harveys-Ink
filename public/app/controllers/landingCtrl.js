var app = angular.module('harveysInk');

app.controller('landingCtrl', function ($scope, $location) {
    $scope.location = function (url) {
        $location.path(url);
    };
});