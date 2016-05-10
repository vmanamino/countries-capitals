angular.module('ccApp')
  .controller('CountriesCtrl', ['$scope', '$routeParams', '$location','countryInfo', 'countriesCache', 'getNeighbors', 'buildCountry', '$timeout',
      function($scope, $routeParams, $location, countryInfo, countriesCache, getNeighbors, buildCountry, $timeout){
      var cache = countriesCache;
      $scope.geocountries = cache.get('called');
      console.log("above func");
      console.log($routeParams);
      $scope.toCountry = function(geocountry){
        getNeighbors(geocountry.geonameId).then(function(response){
            buildCountry(geocountry, response);
            var path = '/countries/'+countryInfo.name+'/capital';
            $location.path(path);
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
  }]);