/**
 * Module setter
 * @type type
 */
angular.module('mpApp.controllers', ['mpApp.services'])
.controller('demoController', function($scope) {
    
    $scope.dev =    {};

    $scope.setModel = function(){
        $scope.dev = {
            name: 'Victor Orozco',
            email: 'vorozco@nabenik.com'
        };
    };
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
    };

})
.controller('greetController', function($scope, $log, helloService, rageService, alternativeGreetService) {
    
    $scope.doGreet = function(){
        $log.warn('Buen saludo' + helloService.sayHello($scope.demoName));
        $log.error('Mal saludo' + rageService.sayHello($scope.demoName));
        
        $log.warn('Buena despedida' + helloService.sayGoodBye($scope.demoName));
        $log.error('Mala despedida' + rageService.sayGoodBye($scope.demoName));
    };
    
    $scope.doGreet2 = function(){
        $log.warn('Buen saludo' + alternativeGreetService.sayHello('Hola alternativo'));
    }

})
;

var module = angular.module('mpApp.controllers');

module.controller('dummyController', function($log, dummyService) {
    
    this.doDummyFunction = function(){
        $log.warn(dummyService.doDummy());
    };

});