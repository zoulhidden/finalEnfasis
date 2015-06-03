'use strict';

angular.module('finalEnfasisApp')
  .controller('CreadorCtrl', function ($scope, creadorService, $translate) {
    var init = function(){
      creadorService.getCreador(callbackCreador);
    }

    var callbackCreador = function(data){
      $scope.creador = data;
    }



    init();
  });
