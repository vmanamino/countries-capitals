angular.module('ccApp', ['ngRoute', 'ngAnimate', 'ngRoute'])
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
  }])
  .service('countryInfo', function(){
      var country = {
        name: '',
        pop: '',
        area: '',
        capital: '',
        capPop: '',
        numNeigh: 0,
        neighbors: []
      };
      return country;
  })
  .factory('countriesCache', ['$cacheFactory', function($cacheFactory){
      return $cacheFactory('countriesCached');
  }])
  .factory('getCountries', ['$http', function($http){
    var request = {
      username: 'vman'
    };
    return $http({
      method: 'GET',
      url: 'http://api.geonames.org/countryInfoJSON', 
      params: request
    });
  }])
  .factory('getNeighbors', ['$http', function($http){
    return function(geonameId){
      return $http({
        method: 'GET',
        url: 'http://api.geonames.org/neighboursJSON',
        params: { username: 'vman', geonameId: geonameId }
      });
    };
  }])
  // .run(['$rootScope', '$location', function($rootScope, $location) {
  //       $rootScope.$on('$routeChangeError', function() {
  //           $location.path('/error');
  //       });
  //   }])
  .controller('HomeCtrl', ['$scope', '$location', 'getCountries', 'countriesCache', 
      function($scope, $location, getCountries, countriesCache){
        
      var cache = countriesCache;
      $scope.countries = function() {
          $location.path('/countries');
          if (!cache.get("called")){
              getCountries.then(function(response){
                  console.log($scope.geocountries);
                  cache.put('called', response.data.geonames);
              }),
              function(response){
                  alert("Error");
              };
          }
      }; 
  }])
  .controller('CountriesCtrl', ['$scope', '$route', '$routeParams', '$location','countryInfo', 'countriesCache', 'getNeighbors', 
      function($scope, $route, $routeParams, $location, countryInfo, countriesCache, getNeighbors){
      var cache = countriesCache;
      $scope.geocountries = cache.get('called');
      console.log("above func");
      console.log($routeParams);
      $scope.toCountry = function(geocountry){
        getNeighbors(geocountry.geonameId).then(function(response){
            countryInfo.name = geocountry.countryName;
            countryInfo.pop = geocountry.population;
            countryInfo.area = geocountry.areaInSqKm;
            countryInfo.capital = geocountry.capital;
            countryInfo.neighbors = response.data.geonames;
            countryInfo.numNeigh = response.data.geonames.length;
            console.log(countryInfo.neighbors);
        }),
        function(response){
          alert('Error');
        };
      };
      $scope.goHome = function(){
        $location.path('/');
      };
      console.log("countries path");
      console.log($routeParams);
  }])
  .controller('CountryCtrl', ['$scope', '$location', 'countryInfo', 'getNeighbors', '$routeParams',
      function($scope, $location, countryInfo, getNeighbors, $routeParams){
      // $location.path('/countries/'+countryInfo.name+'/capital');
      console.log("country views");
      console.log($routeParams);
      $scope.country = countryInfo;
  }]);
  
