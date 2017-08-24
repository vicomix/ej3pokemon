/**
 * Module getter
 * @type angular.module.angular-1_3_6_L1749.moduleInstance
 */
var module = angular.module('mpApp.services');


module.service('dummyService', function dummyService(){
    this.doDummy = function () {
        return 'The most dummiest thing on earth is reading messages like this';
    };
});

function alternativeGreetService () {
  var alternativeGreetService = {};
  function greeting (name) {
    return 'Hola ' + name;
  }
  alternativeGreetService.sayHello = function (name) {
    return greeting(name);
  };
  return alternativeGreetService;
}

module.factory('alternativeGreetService', alternativeGreetService);
