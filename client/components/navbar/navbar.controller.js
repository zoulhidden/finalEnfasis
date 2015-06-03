'use strict';

angular.module('finalEnfasisApp')
  .controller('NavbarCtrl', function ($scope, $location, $translate) {
    $scope.menu = [{
      'title': 'Paises',
      'link': '/'
    }];
    $scope.creador = [{
      'title': 'Creador',
      'link': '/creador'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
