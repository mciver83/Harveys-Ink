var app = angular.module('harveysInk');

app.controller('portfolioCtrl', function($scope, fileReader){
	$scope.getFile = function () {
        $scope.progress = 0;
        fileReader.readAsDataUrl($scope.file, $scope)
                      .then(function(result) {
                          $scope.imageSrc = result;
                      });
    };
 
    $scope.$on("fileProgress", function(e, progress) {
        $scope.progress = progress.loaded / progress.total;
    });


    $scope.newProject = {};
   	$scope.newProject.images = [];
    
    $scope.addImage = function (image, file) {
    	data = {
    		url: image,
    		name: file.name,
    		type: file.type
    	}
    	$scope.newProject.images.push(data);

    }

    $scope.removeImage = function (image, index) {
    	$scope.newProject.images.splice(index, 1);
    }

    $scope.addProject = function(project){
    	console.log(1111111, project);
    }
})