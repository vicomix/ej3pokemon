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


