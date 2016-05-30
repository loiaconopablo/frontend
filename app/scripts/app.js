'use strict';

/**
 * @ngdoc overview
 * @name desappGroupABackendApp
 * @description
 * # desappGroupABackendApp
 *
 * Main module of the application.
 */
angular
  .module('desappGroupABackendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'uiGmapgoogle-maps',
    'LocalStorageModule',
    'config',
    'pascalprecht.translate'
  ])
  .config(function($translateProvider) {
    $translateProvider.translations('en', {
        PAGETITLE: "Let's go, come with me if you wanna live.",
        TITLEDESCRIPTION: "This platform allow users to share them trip by car or another vehicle enabling to take at least two people.",
        BUTTON_TEXT_EN: "english",
        BUTTON_TEXT_ES: "español"
      })
      .translations('es', {
        PAGETITLE: '¡Subi que te llevo!',
        TITLEDESCRIPTION: "Plataforma donde los usuarios puedan coordinarse para compartir viajes en auto o cualquier otro vehículo que permita llevar al menos 2 personas.",
        BUTTON_TEXT_EN: "english",
        BUTTON_TEXT_ES: "español"
      });
    $translateProvider.preferredLanguage('es');
  })
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl',
        controllerAs: 'products'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/routes', {
        templateUrl: 'views/routes.html',
        controller: 'RoutesCtrl',
        controllerAs: 'routes'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/vehicles/new', {
        templateUrl: 'views/vehicles/new.html',
        controller: 'NewVehicleCtrl',
        controllerAs: 'newVehicleCtrl'
      })
      .when('/vehicles/:id', {
        templateUrl: 'views/vehicles/show.html',
        controller: 'ShowVehicleCtrl',
        controllerAs: 'showVehicleCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      key: '', // Ask for this!
      v: '3.23', //defaults to latest 3.X anyhow
      libraries: 'weather,geometry,visualization'
    });
  });
