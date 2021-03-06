var app = angular.module('harveysInk');

app.controller('portfolioCtrl', function ($scope, fileReader, portfolioService){
	
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


	$scope.getFile = function () {
        $scope.progress = 0;
        fileReader.readAsDataUrl($scope.file, $scope)
                      .then(function(result) {
                          $scope.imageSrc = result;
                          $scope.addImage($scope.imageSrc, $scope.file)
                      });
    };
 
    // $scope.$on("fileProgress", function(e, progress) {
    //     $scope.progress = progress.loaded / progress.total;
    // });



    $scope.removeImage = function (image, index) {
    	$scope.newProject.images.splice(index, 1);
    }

    $scope.addProject = function(project){
    	portfolioService.addProject(project).then(function(response){
            console.log(response);
    	})
    }
    
    
    function getProjects () {
        portfolioService.getProjects().then(function(response) {
            $scope.projects = response.data
        })
    }
})

