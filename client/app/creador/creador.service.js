'use strict';

angular.module('finalEnfasisApp')
  .service('creadorService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var self;
    self= this;

    self.getCreador = function(callback){
      $http.get('http://greatsource.co/futuro/API/getAll?cedula=1036648452').success(function(data){
        callback(data);
      });
    };
  });
