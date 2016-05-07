angular.module('ccApp', ['ngRoute', 'ngAnimate'])
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
          templateUrl : './countries/countries.html'
        })
      .when('/countries/:country/capital',
        {
          templateUrl : './country/country.html'
        })
      .when('/error', 
        {
          template : '<p>Error - Page Not Found</p>'
        })
      .otherwise('/error');
  }])
  .factory('getCountries', ['$http', '$cacheFactory', function($http, $cacheFactory){
    var request = {
      username: 'vman'
    };
		return {
		  countries : function(){
		    return $http.get('http://api.geonames.org/countryInfoJSON', request);
		  }
		};
	}])
  .run(['$rootScope', '$location', function($rootScope, $location) {
        'use strict';
        $rootScope.$on('$routeChangeError', function() {
            $location.path('/error');
        });
    }])
  .controller('HomeCtrl', ['$scope', '$location', 'getCountries', function($scope, $location, getCountries){
      $scope.countries = function() {
        console.log("countries clicked");
        $location.path('/countries');
        console.log(getCountries.countries());
        return;
      };    
  }]);
  
