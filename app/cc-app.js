angular.module('ccApp', ['library', 'ngRoute', 'ngAnimate'])
  .config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $routeProvider
      .when('/',
        { 
          templateUrl : './app/home/home.html',
          controller: 'HomeCtrl'
        })
      .when('/countries',
        {
          templateUrl : './app/countries/countries.html',
          controller: 'CountriesCtrl'
        })
      .when('/countries/:country/capital',
        {
          templateUrl : './app/country/country.html',
          controller: 'CountryCtrl'
        })
      .when('/error', 
        {
          template : '<p>Error - Page Not Found</p>'
        })
      .otherwise('/error');
  }])
  .run(['$rootScope', '$location', '$timeout', function($rootScope, $location, $timeout) {
        'use strict';
      $rootScope.$on('$routeChangeError', function() {
          $location.path('/error');
      });
      $rootScope.$on('$routeChangeStart', function() {
          $rootScope.isLoading = true;  
      });
      $rootScope.$on('$routeChangeSuccess', function() {
          $timeout(function(){
          $rootScope.isLoading = false;
          }, 4000); 
      });
  }]);