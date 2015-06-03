'use strict';

angular.module('finalEnfasisApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'pascalprecht.translate'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

    $translateProvider.translations('es',{
      PAISES:  'Paises',
      CREADOR:      'Creador',
      MENSAJE:     'Mensaje',
      NOMBRE_PAIS: 'Nombre',
      CONTINENTE_PAIS: 'Continente',
      CAPITAL_PAIS: 'Capital',
      POPULATION: 'Poblacion'
    });
    $translateProvider.translations('en',{
      PAISES:  'Countries',
      CREADOR:      'Creator',
      MENSAJE:     'Message',
      NOMBRE_PAIS: 'Name',
      CONTINENTE_PAIS: 'Region',
      CAPITAL_PAIS: 'Capital',
      POPULATION: 'Population'
    });

    $translateProvider.preferredLanguage('es');
  });
