'use strict';

angular.module('finalEnfasisApp')
  .service('mainService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var self;
    self= this;

    self.getPaises = function(callback){
      $http.get('https://restcountries.eu/rest/v1/all').success(function(data){
        callback(data);
      });
    };
  });
