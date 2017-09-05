
angular.module('mpApp.controllers', [])
.controller('pokeController', function($scope, $log, $http) {
    
    $scope.getPoke = function(){
       // $scope.pokeFacts = [];
        
        var url="http://pokeapi.co/api/v2/pokemon/"+$scope.search;
        
        $http({method:'GET',
            url:url})
                .then(function success(response){
                    $scope.pokeFacts = response.data;
                    $log.warn("Resultados:" + response.data.name);
            
                }, function error(response){
                    $scope.pokeFacts ="";
                });
         
        $scope.dev = {};
    }

});


