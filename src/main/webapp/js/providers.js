var module = angular.module('mpApp.providers', []);

module.provider("game", function () {
  var language;
  return {
    setLanguage: function (value) {
      language = value;
    },
    $get: function () {
      var gameService = {};
      gameService.phrase =  language + " rules!";
      gameService.compare = function(otherlanguage){
          return otherlanguage + " is worst than " + language;
      };
      return gameService;
    }
  };
});

module.config(function (gameProvider) {
  gameProvider.setLanguage("Java");
});
