var app = angular.module('harveysInk');

app.controller('whoCtrl', function ($scope, contentService, content) {
    
    $scope.content = content;
    
    $scope.addContent = function (content) {
        var content = {
            whoWeAre: content
        };
        
        contentService.addContent(content).then(function (response) {
            console.log(222222222, response)
            $scope.content = response.data;
        })
    }
    
    $scope.editContent = function (content) {
        
        var content = {
            whoWeAre: content
        };
        
        contentService.editContent(content).then(function (response) {
            console.log(444444444, response);
            contentService.getContent().then(function (response) {
                console.log(55555555555, response)
                $scope.content = response.data[0].whoWeAre;
                $scope.showContent = !$scope.showContent;
            })
        })
    }
    
})