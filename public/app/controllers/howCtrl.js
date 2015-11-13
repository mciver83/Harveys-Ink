var app = angular.module('harveysInk');

app.controller('howCtrl', function ($scope, contentService, content) {
    
    $scope.content = content;
    
    $scope.addContent = function (content) {
        var content = {
            howWeWork: content
        };
        
        contentService.addContent(content).then(function (response) {
            $scope.content = response.data.whoWeAre;
        })
    }
    
    $scope.editContent = function (content) {
        
        var content = {
            howWeWork: content
        };
        
        contentService.editContent(content).then(function (response) {
            console.log(2222222222222, response)
            contentService.getContent().then(function (response) {
                $scope.content.howWeWork = response.data[0].howWeWork;
                $scope.showContent = !$scope.showContent;
            })
        })
    }
    
})