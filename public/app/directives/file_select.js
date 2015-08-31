var app = angular.module('harveysInk');

app.directive("ngFileSelect",function(){

  return {
    link: function(scope, element){
      
      element.bind("change", function(e){
      
        scope.file = (e.srcElement || e.target).files[0];
        scope.getFile();
      })
      
    }
    
  }
})