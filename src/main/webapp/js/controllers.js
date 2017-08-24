angular.module('mpApp.controllers', [])

/* Driver controller */
.controller('demoController', function($scope) {
    
    $scope.dev =    {};

    $scope.setModel = function(){
        $scope.dev = {
            name: 'Victor Orozco',
            email: 'vorozco@nabenik.com'
        }
    }
})
.controller('norrisController', function($scope, $log, $http) {
    
    $scope.getNorris = function(){
        $scope.norrisFacts = [];
        
        var url="https://api.chucknorris.io/jokes/search?query="+$scope.search;
        
        $http({method:'GET',
            url:url})
                .then(function success(response){
                    $scope.norrisFacts = response.data.result;
                    $log.warn("Facts encontrados" + response.data.total);
            
                }, function error(response){
                    $scope.norrisFacts = [];
                });
         
        $scope.dev = {};
    }

});


