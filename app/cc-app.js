angular.module('ccApp', ['library', 'ngRoute', 'ngAnimate', 'ngRoute'])
  .config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $routeProvider
      .when('/',
        { 
          templateUrl : './home/home.html',
          controller: 'HomeCtrl'
        })
      .when('/countries',
        {
          templateUrl : './countries/countries.html',
          controller: 'CountriesCtrl'
        })
      .when('/countries/:country/capital',
        {
          templateUrl : './country/country.html',
          controller: 'CountryCtrl'
        })
      .when('/error', 
        {
          template : '<p>Error - Page Not Found</p>'
        })
      .otherwise('/error');
  }]);