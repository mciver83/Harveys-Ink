var app = angular.module('harveysInk');

app.config(function ($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'public/app/views/landing.html',
        controller: 'landingCtrl'
    })
    .when('/home/', {
        templateUrl: 'public/app/views/home.html',
        controller: 'homeCtrl',
        resolve: {
            portfolio: function (portfolioService) {
                return portfolioService.getProjects().then(function (response) {
                return response.data;
                })
            }
        }
    })
    .when('/who/', {
        templateUrl: 'public/app/views/who.html',
        controller: 'whoCtrl',
        resolve: {
            content: function (contentService) {
                return contentService.getContent().then(function (response) {
                if (response.data[0])return response.data[0];})
            }
        }
    })
    .when('/how/', {
        templateUrl: 'public/app/views/how.html',
        controller: 'howCtrl',
        resolve: {
            content: function (contentService) {
                return contentService.getContent().then(function (response) {
                if (response.data[0])return response.data[0];})
            }
        }

    })
    .when('/pricing/', {
        templateUrl: 'public/app/views/pricing.html', 

    })
    .when('/contact/', {
        templateUrl: 'public/app/views/contact.html', 

    })
    .when('/admin/portfolio', {
        templateUrl: 'public/app/admin/views/portfolio.html', 
        controller: 'portfolioCtrl'
    })
    .otherwise('/')
})