'use strict';

angular.module('finalEnfasisApp')
  .controller('MainCtrl', function ($scope, mainService, $translate) {

    var init = function(){
      mainService.getPaises(callbackPaises);
    }

    var callbackPaises = function(data){
      $scope.paises = data;
    }

    $scope.changeLang = function(lang){
      $translate.use(lang);
    }

    init();

  });
