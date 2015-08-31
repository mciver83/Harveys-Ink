var app = angular.module('harveysInk', ['ngRoute', 'ui.bootstrap']);

app.config(function ($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'app/views/landing.html',
        controller: 'landingCtrl'
    })
    .when('/home/', {
        templateUrl: 'app/views/home.html',
        controller: 'homeCtrl'
    })
    .when('/admin/portfolio', {
        templateUrl: 'app/admin/views/portfolio.html', 
        controller: 'portfolioCtrl'
    })
    .otherwise('/')
})