angular.module('library', [])
  .service('countryInfo', function(){
        var country = {
            name: '',
            pop: '',
            area: '',
            capital: '',
            code: '',
            capPop: '',
            numNeigh: 0,
            neighbors: []
        };
        return country;
  })
  .factory('countriesCache', ['$cacheFactory', function($cacheFactory){
        return $cacheFactory('countriesCached');
  }])
  .factory('getCountries', ['$http', function($http, $q){
        var request = {
                username: 'vman'
            };
        return $http({
                method: 'GET',
                url: 'http://api.geonames.org/countryInfoJSON', 
                params: request
            });
  }])
  .factory('getCountry', ['$http', function($http){
        return function(countryCode){
            return $http({
                method: 'GET',
                url: 'http://api.geonames.org/countryInfoJSON',
                params: { username: 'vman', country: countryCode }
            });
        };
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
  .factory('buildCountry', ['countryInfo', function(countryInfo){
        return function(geocountry, response){
            countryInfo.name = geocountry.countryName;
            countryInfo.code = geocountry.countryCode;
            countryInfo.pop = geocountry.population;
            countryInfo.area = geocountry.areaInSqKm;
            countryInfo.capital = geocountry.capital;
            countryInfo.neighbors = response.data.geonames;
            countryInfo.numNeigh = response.data.geonames.length;
        };
  }])
  .run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function() {
             $location.path('/error');
         });
  }]);